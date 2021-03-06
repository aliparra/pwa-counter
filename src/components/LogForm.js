import { LitElement, html, css } from 'lit-element';
import './LogButton.js';
import { registerUser, login } from '../services/index.js';

export class LogForm extends LitElement {
  static get properties() {
    return {
      emailValue: { type: String },
      passwordValue: { type: String },
      actionType: { type: String },
      lastData: { Date },
      message: { String },
    };
  }

  static get styles() {
    return css`
      .form__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
      }

      .inputs__sec {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 5px;
        padding-bottom: 10px;
        width: 100%;
      }

      .inputs__sec input {
        margin: 5px;
        padding: 15px;
        border-top: none;
        border-right: none;
        border-left: none;
        background-color: none;
      }

      .login__button {
        margin-top: 10px;
        padding: 10px;
        cursor: pointer;
        color: white;
        font-weight: bold;
        border: none;
        background-color: var(--dark-blue-color);
        align-self: center;
        width: 98%;
      }

      .submit__sec {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .submit__sec label {
        padding: 10px;
      }

      .error__message {
        color: red;
      }

      .load__message {
        color: blue;
      }

      @media only screen and (min-width: 750px) {
        .form__wrapper {
          width: 480px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.emailValue = '';
    this.passwordValue = '';
    this.actionType = '';
    this.message = '';
  }

  render() {
    return html`
      <div class="form__wrapper">
        <form
          class="inputs__sec"
          @submit=${this.actionType === 'register'
            ? this.handleRegister
            : this.handleLogin}
        >
          <input
            name="email"
            type="email"
            id="email__box"
            placeholder="Email"
            .value=${this.emailValue}
            @input=${this.handleEmail}
            required
          />
          <input
            name="password"
            type="password"
            id="password__box"
            placeholder="Password"
            .value=${this.passwordValue}
            @input=${this.handlePassword}
            required
          />
          <button class="login__button" type="submit">
            ${this.actionType === 'login' ? 'Log in' : 'Register now'}
          </button>
        </form>

        <div class="submit__sec">
          <p
            class=${this.message === 'Loading...'
              ? 'load__message'
              : 'error__message'}
          >
            ${this.message}
          </p>
          <label>Not registered yet?</label>
          <app-log-button
            text=${this.actionType === 'login' ? 'Sign in' : 'Go to log in'}
            .dark=${false}
            .url=${this.actionType === 'login' ? '/signin' : '/'}
          ></app-log-button>
        </div>
      </div>
    `;
  }

  handleEmail(e) {
    this.emailValue = e.target.value;
  }

  handlePassword(e) {
    this.passwordValue = e.target.value;
  }

  handleRegister(e) {
    e.preventDefault();
    const authData = {
      email: this.emailValue,
      password: this.passwordValue,
    };
    this.message = 'Loading...';
    if (authData.password.length < 4 || authData.password.includes(' ')) {
      this.message =
        'The password must have at least 4 characters without spaces';
    } else {
      registerUser(authData)
        .then(data => {
          if (data.errors) {
            this.message = 'Credentials are already in use';
            this.redirect('/signin');
          } else {
            this.redirect('/');
          }
        })
        .catch(error => error);
    }

    this.clearInputs();

    return authData;
  }

  handleLogin(e) {
    e.preventDefault();
    const authData = {
      email: this.emailValue,
      password: this.passwordValue,
    };
    this.message = 'Loading...';
    login(authData)
      .then(data => {
        this.message = '';
        if (data.access_token) {
          window.localStorage.setItem('acess_token', data.access_token);
          window.localStorage.setItem('logout', data.logout);
          this.redirect('/personal-area');
        } else {
          this.message = 'Incorrect password';
          this.redirect('/');
        }
      })
      .catch(this.redirect('/'));
    this.clearInputs();

    return authData;
  }

  clearInputs() {
    this.emailValue = '';
    this.passwordValue = '';
  }

  redirect(url) {
    this.dispatchEvent(
      new CustomEvent('redirect', {
        detail: url,
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define('app-log-form', LogForm);
