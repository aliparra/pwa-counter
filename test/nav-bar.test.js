import { fixture, expect } from '@open-wc/testing';
import '../src/components/NavBar.js';

describe('NavBar', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(`<app-nav-bar></app-nav-bar>`);
  });

  it(`Check the component have an h3`, () => {
    const paragraph = element.shadowRoot.querySelector('p');
    expect(paragraph).to.exist;
  });
});
