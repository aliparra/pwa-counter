import { html } from 'lit';
import { fixture, expect, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/components/LogForm.js';

describe('Log form', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<app-log-form></app-log-form>`);
  });

  it('ClearInputs set the properties correctly', () => {
    element.emailValue = 'test@test.com';
    element.passwordValue = 'test';
    element.clearInputs();
    expect(element.emailValue).to.equal('');
    expect(element.passwordValue).to.equal('');
  });

  // Redirect event

  it('Redirect event starts when redirect method is called', async () => {
    const eventSpy = sinon.spy();
    document.addEventListener('redirect', eventSpy);
    element.redirect('prueba');
    expect(eventSpy).to.have.been.calledOnce;
    document.removeEventListener('redirect', eventSpy);
  });

  it('The event detail equals to the argument passed', async () => {
    setTimeout(() => {
      element.redirect('urltest');
    });
    const { detail } = await oneEvent(element, 'redirect');
    expect(detail).to.equal('urltest');
  });

  it('value emailValue takes the value provided by the event', () => {
    element.handleEmail({ target: { value: 'mail@mail.com' } });
    expect(element.emailValue).to.equal('mail@mail.com');
  });

  it('value passwordValue takes the value provided by the event', () => {
    element.handlePassword({ target: { value: 'test' } });
    expect(element.passwordValue).to.equal('test');
  });
});
