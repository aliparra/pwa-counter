import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/components/Counter.js';

describe('Counter', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<app-counter></app-counter>`);
  });

  it('Keep the constructor values if there is no time difference ', () => {
    sinon.stub(element, 'getTimeDifference').returns(false);
    expect(element.seconds).to.equal(0);
    expect(element.minutes).to.equal(0);
    expect(element.hours).to.equal(0);
    expect(element.days).to.equal(0);
  });

  it('timeCalculator set the correct values ', () => {
    element.timeCalculator(306050);
    expect(element.days).to.equal(3);
    expect(element.hours).to.equal(13);
    expect(element.minutes).to.equal(0);
    expect(element.seconds).to.equal(50);
  });

  it('getTimeDifference return an integer number ', () => {
    sinon
      .stub(window.localStorage, 'getItem')
      .returns('2021-09-16T06:07:01.693Z');
    expect(element.getTimeDifference()).to.be.a('number');
    expect(element.getTimeDifference() % 1).to.equal(0);
  });
});
