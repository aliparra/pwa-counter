import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { routesData } from './data/routesData.js';

import './views/LogIn.js';
import './views/SignIn.js';
import './views/PersonalArea.js';

import './components/NavBar.js';

export class PwaCounter extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('redirect', this.handleClick);
  }

  disconnectedCallback() {
    window.removeEventListener('redirect', this.handleClick);
    super.disconnectedCallback();
  }

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

  // eslint-disable-next-line
  handleClick(ev) {
    const { detail } = ev;

    Router.go({
      pathname: `${detail}`,
    });

    return detail;
  }
}
customElements.define('pwa-counter', PwaCounter);
