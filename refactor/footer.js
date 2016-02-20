;(function () {
  function Footer (controls) {
    this.el = document.createElement('div')
    this.el.classList.add('Footer')

    this.editor = new Editor(controls)
    this.saveButton = new SaveButton()
    this.presetList = new PresetList()
    this.controls = controls

    var _this = this

    this.saveButton.el.addEventListener('click', function () {
      _this.presetList.addPreset(_this.editor.generatePreset())
    })

    this.el.appendChild(this.controls.el)
    this.el.appendChild(this.editor.el)
    this.el.appendChild(this.saveButton.el)
    this.el.appendChild(this.presetList.el)
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Footer
  } else {
    this.Footer = Footer
  }
})()
