import { LitElement, html, css } from 'lit';

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
      </div>
    `;
  }
}
customElements.define('view-log-in', LogIn);
