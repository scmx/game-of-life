;(function (exports) {
  function PlayerControls () {
    this.el = document.createElement('div')
    this.el.classList.add('PlayerControls')

    this.playButton = new PlayButton()
    this.pauseButton = new PauseButton()
    this.clearButton = new ClearButton()
    this.randomButton = new RandomButton()
    this.rangeInput = new RangeInput(3, 12, 1, 6)
    this.backAnchor = new Anchor('../', 'View the original')
    this.backAnchor.el.classList.add('BackLink')

    this.el.appendChild(this.playButton.el)
    this.el.appendChild(this.pauseButton.el)
    this.el.appendChild(this.clearButton.el)
    this.el.appendChild(this.randomButton.el)
    this.el.appendChild(this.rangeInput.el)
    this.el.appendChild(this.backAnchor.el)
  }

  function EditorControls () {
    this.el = document.createElement('div')
    this.el.classList.add('EditorControls')

    this.rangeInput = new RangeInput(5, 17, 2, 7)

    this.el.appendChild(this.rangeInput.el)
  }

  exports.PlayerControls = PlayerControls
  exports.EditorControls = EditorControls
})(typeof module === 'undefined' ? this : module.exports = {})
