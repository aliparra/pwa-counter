import { LitElement, html, css } from 'lit';

export class NavBar extends LitElement {
  static get styles() {
    return css`
      :host {
        --blue-color: #174d797e;
        --white-color: #ffffff;
      }
      #page-container {
        text-align: right;
        margin: 30px;
        background-color: var(--blue-color);
        text-align: center;
      }
      #page-container > p {
        padding: 7px;
        color: var(--white-color);
        font-weight: bold;
      }
    `;
  }

  render() {
    return html`
      <main id="page-container">
        <p>PWA-COUNTER-APP</p>
      </main>
    `;
  }
}
customElements.define('app-nav-bar', NavBar);
