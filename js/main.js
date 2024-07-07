customElements.define('days-ago', class extends HTMLElement {
  static tagName = 'days-ago'

  static observedAttributes = ['since']

  #calculateDays() {
    const today = new Date()
    const since = new Date(this.since)
    return Math.floor((today - since) / 864e5)
  }

  #format() {
    const days = this.#calculateDays()
    const years = days / 365.25
    return `${years.toFixed(1)} years or ${days.toLocaleString()} days`
  }

  get since() {
    return this.getAttribute('since')
  }

  set since(value) {
    this.setAttribute('since', value)
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  attributeChangedCallback(key) {
    this.shadowRoot.textContent = this.#format()
  }
})
