import { LitElement, html, css } from 'lit';
import '../components/Button.js';

export class LogIn extends LitElement {
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
        <h1>Login</h1>
        <app-log-button
          text="Test1"
          url="/signin"
          .dark=${true}
        ></app-log-button>
        <app-log-button
          text="Test2"
          url="/personal-area"
          .dark=${false}
        ></app-log-button>
      </div>
    `;
  }
}
customElements.define('view-log-in', LogIn);
