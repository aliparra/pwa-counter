import { LitElement, html, css } from 'lit';
import '../components/LogForm.js';

export class SignIn extends LitElement {
  static get styles() {
    return css`
      .text-block {
        text-align: center;
        margin: 100px;
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <h1>Register here</h1>
        <app-log-form actionType="register"></app-log-form>
      </div>
    `;
  }
}
customElements.define('view-sign-in', SignIn);
