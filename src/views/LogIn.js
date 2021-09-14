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
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <h1>Login</h1>
        <div class="form__wrapper">
          <app-log-form actionType="login"></app-log-form>
        </div>
      </div>
    `;
  }
}
customElements.define('view-log-in', LogIn);
