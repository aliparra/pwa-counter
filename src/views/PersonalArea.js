import { LitElement, html, css } from 'lit';

export class PersonalArea extends LitElement {
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
        <h1>Personal Area</h1>
      </div>
    `;
  }
}
customElements.define('view-personal-area', PersonalArea);
