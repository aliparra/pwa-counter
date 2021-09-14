import { LitElement, html, css } from 'lit-element';

export class LogButton extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      url: { type: String },
      color: { type: String },
      handler: { Function },
    };
  }

  static get styles() {
    return css`
      :host {
        --light-blue-color: #2b88e6;
        --dark-blue-color: #0754a1;
        --white-color: #ffffff;
      }
      button {
        padding: 10px;
        cursor: pointer;
        color: white;
        font-weight: bold;
        border: none;
      }

      .dark {
        background-color: var(--dark-blue-color);
      }

      .light {
        background-color: var(--light-blue-color);
      }
    `;
  }

  constructor() {
    super();
    this.text = 'default';
    this.url = '';
    this.dark = false;
  }

  render() {
    return html`<button
      @click=${this.handler}
      class=${this.dark ? 'dark' : 'light'}
    >
      ${this.text}
    </button>`;
  }
}
customElements.define('app-log-button', LogButton);
