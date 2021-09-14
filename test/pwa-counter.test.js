import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/PwaCounter.js';

describe('PwaCounter', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<pwa-counter></pwa-counter>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
