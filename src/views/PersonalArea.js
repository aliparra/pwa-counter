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

      .text-block p {
        color: gray;
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <h1>Welcome!</h1>
        <p>The last time you accesed was</p>
        <app-counter></app-counter>
        <app-log-button
          .text=${'Log out'}
          .dark=${false}
          .url=${'/'}
        ></app-log-button>
      </div>
    `;
  }
}
customElements.define('view-personal-area', PersonalArea);
