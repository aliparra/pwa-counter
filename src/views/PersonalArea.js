import { LitElement, html, css } from 'lit';
import '../components/Counter.js';

export class PersonalArea extends LitElement {
  static get styles() {
    return css`
      .text-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <h1>Personal Area</h1>
        <app-counter></app-counter>
      </div>
    `;
  }
}
customElements.define('view-personal-area', PersonalArea);
