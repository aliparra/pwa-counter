import { LitElement, html, css } from 'lit';
import '../components/Counter.js';
import { logout } from '../services/index.js';

export class PersonalArea extends LitElement {
  static get properties() {
    return {
      currentToken: { type: String },
    };
  }

  static get styles() {
    return css`
      .text-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .text-block p {
        color: gray;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.currentToken = window.localStorage.getItem('acess_token');
  }

  render() {
    return html`
      <div class="text-block">
        <h1>Welcome!</h1>
        <p>The last time you accesed was</p>
        <app-counter></app-counter>
        <button @click=${this.makeLogout}>logout</button>
      </div>
    `;
  }

  makeLogout() {
    logout(this.currentToken);
  }
}
customElements.define('view-personal-area', PersonalArea);
