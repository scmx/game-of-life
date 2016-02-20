;(function () {
  function Preset (title, grid, dataURL) {
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

    function onMouseMove (event) {
      // console.log('move', event)
    }

    function onMouseLeave (event) {
      console.log('leave', event)
    }

    function onMouseEnter (event) {
      console.log('enter', event)
    }

    function onMouseUp (event) {
      console.log('up', event)
    }
  }

  Preset.prototype.generateDataURL = function (grid) {
    var renderer = new Renderer(grid)
    // document.body.appendChild(renderer.el)
    renderer.render(false)
    console.log(renderer)
    console.log(renderer.el.toDataURL('image/png'))
    return renderer.el.toDataURL('image/png')
  }

  function PresetList () {
    this.el = document.createElement('div')
    this.el.classList.add('PresetList')

    this.presets = []

    var _this = this

    // setTimeout(function () {
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
  // })
  }

  PresetList.prototype.addPreset = function (preset) {
    this.presets.push(preset)
    this.el.appendChild(preset.el)
  }

  PresetList.prototype.createPreset = function (title, dataGridArray) {
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

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Preset
    module.exports = PresetList
  } else {
    this.Preset = Preset
    this.PresetList = PresetList
  }
})()
