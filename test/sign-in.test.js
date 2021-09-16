import { html, fixture, expect } from '@open-wc/testing';
import '../src/views/SignIn.js';

describe('SignIn', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<view-sign-in></view-sign-in>`);
  });

  it(`Check signIn render an h1`, () => {
    const myh1 = element.shadowRoot.querySelector('h1');
    expect(myh1).to.exist;
  });

  it(`Check signIn render a form`, () => {
    const form = element.shadowRoot.querySelector('app-log-form');
    expect(form).to.exist;
  });
});
