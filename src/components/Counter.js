import { LitElement, html, css } from 'lit';

export class Counter extends LitElement {
  static get properties() {
    return {
      days: { type: String },
      hours: { type: String },
      minutes: { type: String },
      seconds: { type: Number },
      secondsDifference: { type: Number },
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
    this.secondsDifference = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.secondsDifference = this.getTimeDifference();

    if (this.secondsDifference) {
      this.timeCalculator(this.secondsDifference);
    }

    this.interval = setInterval(() => {
      if (this.seconds === 59) {
        if (this.minutes === 59) {
          if (this.hours === 23) {
            this.days += 1;
            this.hours = 0;
          }
          this.hours += 1;
          this.minutes = 0;
        }
        this.minutes += 1;
        this.seconds = 0;
      }
      this.seconds += 1;
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.clearInterval(this.interval);
  }

  updated(changed) {
    super.updated(changed);
  }

  render() {
    return html`
      <main class="counter__wrapper">
        <div id="number__sec">
          <h1>${this.days < 10 ? `0${this.days} ` : this.days}</h1>
          <h3>days</h3>
        </div>
        <div id="number__sec">
          <h1>${this.hours < 10 ? `0${this.hours}` : this.hours}</h1>
          <h3>hours</h3>
        </div>
        <div id="number__sec">
          <h1>${this.minutes < 10 ? `0${this.minutes}` : this.minutes}</h1>
          <h3>minutes</h3>
        </div>
        <div id="number__sec">
          <h1>${this.seconds < 10 ? `0${this.seconds}` : this.seconds}</h1>
          <h3>seconds</h3>
        </div>
      </main>
    `;
  }

  timeCalculator(seconds) {
    let totalSeconds = seconds;
    this.days = Math.floor(seconds / (3600 * 24));
    totalSeconds -= this.days * 3600 * 24;
    this.hours = Math.floor(totalSeconds / 3600);
    totalSeconds -= this.hours * 3600;
    this.minutes = Math.floor(totalSeconds / 60);
    totalSeconds -= this.minutes * 60;

    this.seconds = totalSeconds;
  }

  // eslint-disable-next-line
  getTimeDifference() {
    const oldDate = window.localStorage.getItem('logout');
    if (oldDate !== null) {
      const secondsBetweenTwoDate = Math.abs(
        (new Date().getTime() - Date.parse(oldDate)) / 1000
      );
      return Math.round(secondsBetweenTwoDate);
    }
    return false;
  }
}

customElements.define('app-counter', Counter);
