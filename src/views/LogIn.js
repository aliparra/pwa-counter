import { LitElement, html, css } from 'lit';
import '../components/LogButton.js';
import '../components/LogForm.js';

export class LogIn extends LitElement {
  static get styles() {
    return css`
      .text-block {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-bottom: 50px;
      }

      .padlock__image {
        width: 120px;
      }

      @media only screen and (min-width: 750px) {
        .padlock__image {
          width: 180px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <img
          class="padlock__image"
          src="https://res.cloudinary.com/dv4pkbmin/image/upload/v1631791777/pwa-counter/candado_fygvyj.png"
          alt="padlock"
          width="150;"
        />
        <h1>Login</h1>
        <div class="form__wrapper">
          <app-log-form actionType="login" url="/personal-area"></app-log-form>
        </div>
      </div>
    `;
  }
}
customElements.define('view-log-in', LogIn);
