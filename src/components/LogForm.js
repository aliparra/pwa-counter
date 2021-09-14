import { LitElement, html, css } from 'lit-element';
import './LogButton.js';

export class LogForm extends LitElement {
  static get properties() {
    return {
      emailValue: { type: String },
      passwordValue: { type: String },
      actionType: { type: String },
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

      .login__button{
        margin-top: 10px;
        padding: 10px;
        cursor: pointer;
        color: white;
        font-weight: bold;
        border: none;
        background-color: var(--dark-blue-color)
      }

      .submit__sec{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .submit__sec label{
        padding: 10px;
      }

      @media only screen and (min-width: 750px) {
       
    `;
  }

  constructor() {
    super();
    this.emailValue = '';
    this.passwordValue = '';
    this.actionType = '';
  }

  render() {
    return html`
      <div class="form__wrapper">
        <form class="inputs__sec" @submit=${this.handleSubmit}>
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
          <button class="login__button" type="submit">Login</button>
        </form>

        <div class="submit__sec">
          <label>Not registered yet?</label>
          <app-log-button
            text=${this.actionType === 'login' ? 'Sign in' : 'Go to log in'}
            .dark=${false}
            .url=${'/signin'}
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

  handleSubmit(e) {
    e.preventDefault();
    const authData = {
      email: this.emailValue,
      password: this.passwordValue,
    };

    this.clearInputs();
    /* console.log(authData); */
    return authData;
  }

  clearInputs() {
    this.emailValue = '';
    this.passwordValue = '';
  }
}

customElements.define('app-log-form', LogForm);
