export class Header {
  constructor (controls) {
    this.el = document.createElement('div')
    this.el.classList.add('Header')

    this.el.appendChild(controls.el)
  }
}
