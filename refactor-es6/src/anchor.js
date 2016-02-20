export class Anchor {
  constructor (href, content) {
    this.el = document.createElement('a')
    this.el.href = href
    this.el.textContent = content
  }
}
