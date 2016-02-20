import { Grid } from './grid'
import { Renderer } from './renderer'

export class Preset {
  constructor (title, grid, dataURL) {
    this.title = title
    this.el = document.createElement('img')
    this.el.src = dataURL || this.generateDataURL(grid)
    this.el.title = title
    this.el.addEventListener('dragstart', onDragStart)

    var dataGrid = grid.toString()

    function onDragStart (event) {
      console.log('dragstart', event)
      console.log(dataGrid)
      event.dataTransfer.setData('text/plain', dataGrid)
    }
  }

  generateDataURL (grid) {
    const renderer = new Renderer(grid)
    renderer.render(false)
    console.log(renderer)
    console.log(renderer.el.toDataURL('image/png'))
    return renderer.el.toDataURL('image/png')
  }
}

export class PresetList {
  constructor () {
    this.el = document.createElement('div')
    this.el.classList.add('PresetList')

    this.presets = []

    var _this = this

    _this.createPreset('Glider', [
      '00000',
      '01010',
      '00110',
      '00100',
      '00000'
    ])

    _this.createPreset('Glider2', [
      '00000',
      '01010',
      '01100',
      '00100',
      '00000'
    ])

    _this.createPreset('Pulsar', [
      '00000000000000000',
      '00000100000100000',
      '00000100000100000',
      '00000110001100000',
      '00000000000000000',
      '01110011011001110',
      '00010101010101000',
      '00000110001100000',
      '00000000000000000',
      '00000110001100000',
      '00010101010101000',
      '01110011011001110',
      '00000000000000000',
      '00000110001100000',
      '00000100000100000',
      '00000100000100000',
      '00000000000000000'
    ])
  }

  addPreset (preset) {
    this.presets.push(preset)
    this.el.appendChild(preset.el)
  }

  createPreset (title, dataGridArray) {
    var grid = []
    for (var h = 0; h < dataGridArray.length; h++) {
      var arr = []
      for (var w = 0; w < dataGridArray[h].length; w++) {
        arr.push(+dataGridArray[h][w])
      }
      grid.push(arr)
    }
    var preset = new Preset(
      title,
      new Grid(grid.length, grid[0].length, grid)
    )
    this.presets.push(preset)
    this.el.appendChild(preset.el)
  }
}
