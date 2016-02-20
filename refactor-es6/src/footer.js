import { Editor } from './editor'
import { SaveButton } from './button'
import { PresetList } from './preset'

export class Footer {
  constructor (controls) {
    this.el = document.createElement('div')
    this.el.classList.add('Footer')

    this.editor = new Editor(controls)
    this.saveButton = new SaveButton()
    this.presetList = new PresetList()
    this.controls = controls

    this.saveButton.el.addEventListener('click', () => {
      this.presetList.addPreset(this.editor.generatePreset())
    })

    this.el.appendChild(this.controls.el)
    this.el.appendChild(this.editor.el)
    this.el.appendChild(this.saveButton.el)
    this.el.appendChild(this.presetList.el)
  }
}
