import { LitElement, html, css } from 'lit-element';

export class LogButton extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      url: { type: String },
      color: { type: String },
    };
  }

  static get styles() {
    return css`
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
      type="button"
      @click=${this.handleClick}
      class=${this.dark ? 'dark' : 'light'}
    >
      ${this.text}
    </button>`;
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent('redirect', {
        detail: this.url,
        bubbles: true,
        composed: true,
      })
    );
  }
}
customElements.define('app-log-button', LogButton);
