import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { routesData } from './data/routesData.js';

import './views/LogIn.js';
import './views/SignIn.js';
import './views/PersonalArea.js';

import './components/NavBar.js';

export class PwaCounter extends LitElement {
  firstUpdated() {
    const router = new Router(this.renderRoot.querySelector('main'));
    router.setRoutes(routesData);
  }

  render() {
    return html`
      <main id="page-container">
        <app-nav-bar></app-nav-bar>
      </main>
    `;
  }
}
customElements.define('pwa-counter', PwaCounter);
