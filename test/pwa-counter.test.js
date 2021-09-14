import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/PwaCounter.js';

describe('PwaCounter', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<pwa-counter></pwa-counter>`);
  });

  it('Header, main and footer exists', () => {
    const navBar = element.shadowRoot.querySelector('app-nav-bar');
    expect(navBar).to.exist;
  });
});
