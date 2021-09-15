import { LitElement, html, css } from 'lit';

export class Counter extends LitElement {
  static get properties() {
    return {
      days: { type: String },
      hours: { type: String },
      minutes: { type: String },
      seconds: { type: Number },
      interval: { Function },
    };
  }

  static get styles() {
    return css`
      .counter__wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        color: gray;
      }

      .counter__wrapper h3 {
        padding: 0 10px;
      }
    `;
  }

  constructor() {
    super();
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.seconds = this.secondsCalculator(
      this.days,
      this.hours,
      this.minutes,
      this.seconds
    );
    this.interval = setInterval(() => {
      this.seconds += 1;
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.clearInterval(this.interval);
  }

  updated(changed) {
    super.updated(changed);
    this.timeCalculator(this.seconds);
  }

  render() {
    return html`
      <main class="counter__wrapper">
        <div id="number__sec">
          <h1>${this.days < 10 ? `0${this.days} ` : this.days}</h1>
          <h3>days</h3>
        </div>
        <div id="number__sec">
          <h1>
            ${this.hours - this.days * 24 < 10
              ? `0${this.hours - this.days * 24} `
              : this.hours - this.days * 24}
          </h1>
          <h3>hours</h3>
        </div>
        <div id="number__sec">
          <h1>
            ${this.minutes - this.hours * 60 < 10
              ? `0${this.minutes - this.hours * 60} `
              : this.minutes - this.hours * 60}
          </h1>
          <h3>minutes</h3>
        </div>
        <div id="number__sec">
          <h1>
            ${this.seconds - this.minutes * 60 < 10
              ? `0${this.seconds - this.minutes * 60} `
              : this.seconds - this.minutes * 60}
          </h1>
          <h3>seconds</h3>
        </div>
      </main>
    `;
  }

  timeCalculator(seconds) {
    this.minutes = Math.floor(seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);
  }

  // eslint-disable-next-line
  secondsCalculator(days, hours, min, sec) {
    const seconds = days * 86400 + hours * 3600 + min * 60 + sec;
    return seconds;
  }
}

customElements.define('app-counter', Counter);
