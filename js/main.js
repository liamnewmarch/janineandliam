class DaysAgo extends HTMLElement {
  static get is() {
    return 'days-ago';
  }

  static get observedAttributes() {
    return ['since'];
  }

  get days() {
    const today = new Date();
    const since = new Date(this.since)
    return Math.floor((today - since) / 864e5);
  }

  get since() {
    return this.getAttribute('since');
  }

  set since(value) {
    this.setAttribute('since', value);
  }

  constructor(...args) {
    super(...args);
    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback(key, _, value) {
    if (key === 'since') {
      this.shadowRoot.textContent = this.days;
    }
  }
}

if ('customElements' in window) {
  customElements.define(DaysAgo.is, DaysAgo);
}
