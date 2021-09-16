import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/components/LogButton.js';

describe('Button', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<app-log-button></app-log-button>`);
  });

  it('When click on the button element customevent is called', async () => {
    const eventSpy = sinon.spy();
    document.addEventListener('redirect', eventSpy);
    element.shadowRoot.querySelector('button').click();
    expect(eventSpy).to.have.been.calledOnce;
    document.removeEventListener('redirect', eventSpy);
  });
});
