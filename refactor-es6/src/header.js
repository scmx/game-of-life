;(function () {
  function Header (controls) {
    this.el = document.createElement('div')
    this.el.classList.add('Header')

    this.el.appendChild(controls.el)
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Header
  } else {
    this.Header = Header
  }
})()
