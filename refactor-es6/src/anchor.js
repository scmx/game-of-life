;(function () {
  function Anchor (href, content) {
    this.el = document.createElement('a')
    this.el.href = href
    this.el.textContent = content
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Anchor
  } else {
    this.Anchor = Anchor
  }
})()
