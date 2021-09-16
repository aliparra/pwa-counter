import { LitElement, html, css } from 'lit';
import '../components/LogForm.js';

export class SignIn extends LitElement {
  static get styles() {
    return css`
      .text-block {
        text-align: center;
        margin: 20px;
      }

      .register__image{
        width: 120px;
      }

      @media only screen and (min-width: 750px) {
        .register__image{
        width: 180px;
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <img
          class="register__image"
          src="https://res.cloudinary.com/dv4pkbmin/image/upload/v1631792170/pwa-counter/id-card_npccmz.png"
          alt="padlock"
          width="150;"
        />
        <h1>Register here</h1>
        <app-log-form actionType="register"></app-log-form>
      </div>
    `;
  }
}
customElements.define('view-sign-in', SignIn);
