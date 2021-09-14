import { LitElement, html } from 'lit';

export class PwaCounter extends LitElement {
  render() {
    return html`
      <main id="page-container">
        <h1>Hello world</h1>
      </main>
    `;
  }
}
customElements.define('pwa-counter', PwaCounter);
