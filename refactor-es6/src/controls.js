import { PlayButton, PauseButton, ClearButton, RandomButton } from './button'
import { RangeInput } from './input'
import { Anchor } from './anchor'

export class PlayerControls {
  constructor () {
    this.el = document.createElement('div')
    this.el.classList.add('PlayerControls')

    this.playButton = new PlayButton()
    this.pauseButton = new PauseButton()
    this.clearButton = new ClearButton()
    this.randomButton = new RandomButton()
    this.rangeInput = new RangeInput(3, 12, 1, 6)
    this.backAnchor = new Anchor('../', 'View the original')
    this.backAnchor2 = new Anchor('../refactor', 'View the original refactor')
    this.backAnchor.el.classList.add('BackLink')
    this.backAnchor2.el.classList.add('BackLink')

    this.el.appendChild(this.playButton.el)
    this.el.appendChild(this.pauseButton.el)
    this.el.appendChild(this.clearButton.el)
    this.el.appendChild(this.randomButton.el)
    this.el.appendChild(this.rangeInput.el)
    this.el.appendChild(this.backAnchor.el)
    this.el.appendChild(this.backAnchor2.el)
  }
}

export class EditorControls {
  constructor () {
    this.el = document.createElement('div')
    this.el.classList.add('EditorControls')

    this.rangeInput = new RangeInput(5, 17, 2, 7)

    this.el.appendChild(this.rangeInput.el)
  }
}
