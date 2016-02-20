import { Grid } from './grid'
import { Preset } from './preset'
import { Renderer } from './renderer'

export class Editor {
  constructor (controls) {
    this.el = document.createElement('div')
    this.el.classList.add('Editor')

    this.controls = controls
    this.updateSize()

    this.grid = new Grid(this.size, this.size, 0)
    this.renderer = new Renderer(this.grid)
    this.renderer.el.addEventListener('mousedown', onMouseDown)
    this.renderer.render(false)

    this.el.appendChild(this.renderer.el)

    this.controls.rangeInput.el.addEventListener('change', (event) => {
      this.updateSize()
    })

    function onMouseDown (event) {
      console.log('down', event)
      start()
      paintGridAt(event)
    }

    function onMouseMove (event) {
      paintGridAt(event, 1)
    }

    function onMouseLeave (event) {
      console.log('leave', event)
      pause()
    }

    function onMouseEnter (event) {
      console.log('enter', event)
      unpause()
    }

    function onMouseUp (event) {
      console.log('up', event)
      stop()
    }

    const start = () => {
      console.log('start')
      this.renderer.el.addEventListener('mousemove', onMouseMove)
      this.renderer.el.addEventListener('mouseleave', onMouseLeave)
      window.addEventListener('mouseup', onMouseUp)
    }

    const pause = () => {
      console.log('pause')
      this.renderer.el.removeEventListener('mousemove', onMouseMove)
      this.renderer.el.addEventListener('mouseenter', onMouseEnter)
    }

    const unpause = () => {
      console.log('unpause')
      this.renderer.el.addEventListener('mousemove', onMouseMove)
    }

    const stop = () => {
      console.log('stop')
      this.renderer.el.removeEventListener('mousemove', onMouseMove)
      this.renderer.el.removeEventListener('mouseleave', onMouseLeave)
      this.renderer.el.removeEventListener('mouseenter', onMouseEnter)
      window.removeEventListener('mouseup', onMouseUp)
    }

    const paintGridAt = (event) => {
      var color = event.altKey ? 0 : 1
      var renderer = this.renderer
      var h = Math.floor(event.layerY / renderer.el.height * this.size)
      var w = Math.floor(event.layerX / renderer.el.width * this.size)
      this.grid.grid1[h][w] = color
      this.grid.grid2[h][w] = color
      this.renderer.render(false)
    }
  }

  generatePreset () {
    return new Preset(
      'unnamed',
      this.grid,
      this.renderer.el.toDataURL('image/png')
    )
  }

  updateSize () {
    var value = +this.controls.rangeInput.el.value
    this.size = value
    if (this.grid) {
      this.grid.resize(value, value)
      this.renderer.updateSize()
      this.renderer.render(false)
    }
  }
}
