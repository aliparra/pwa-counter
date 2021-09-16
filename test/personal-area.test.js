import { html, fixture, expect } from '@open-wc/testing';
import '../src/views/PersonalArea.js';
import sinon from 'sinon';

describe('PersonalArea', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<view-personal-area></view-personal-area>`);
  });

  it(`Check personal-area renders an h1`, () => {
    const myh1 = element.shadowRoot.querySelector('h1');
    expect(myh1).to.exist;
  });

  it(`Check personal-area render a counter`, () => {
    const counter = element.shadowRoot.querySelector('app-counter');
    expect(counter).to.exist;
  });

  it(`Check personal-area render a button`, () => {
    const button = element.shadowRoot.querySelector('button');
    expect(button).to.exist;
  });

  it('Redirect event starts when makeLogout method is called', async () => {
    const eventSpy = sinon.spy();
    document.addEventListener('redirect', eventSpy);
    element.makeLogout();
    expect(eventSpy).to.have.been.calledOnce;
    document.removeEventListener('redirect', eventSpy);
  });
});
