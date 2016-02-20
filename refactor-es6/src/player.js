import { Grid } from './grid'
import { Renderer } from './renderer'

export class Player {
  constructor (controls) {
    this.el = document.createElement('div')
    this.el.classList.add('Player')

    this.grid = new Grid(30, 60)
    this.controls = controls
    this.renderer = new Renderer(this.grid)

    this.controls.playButton.el.addEventListener('click', () => {
      this.play()
    })

    this.controls.pauseButton.el.addEventListener('click', () => {
      this.pause()
    })

    this.controls.clearButton.el.addEventListener('click', () => {
      this.grid.clear()
      if (!this.running) {
        this.renderer.render()
      }
    })

    this.controls.randomButton.el.addEventListener('click', () => {
      this.grid.randomize()
      if (!this.running) {
        this.renderer.render()
      }
    })

    this.controls.rangeInput.el.addEventListener('change', (event) => {
      this.updateSpeed()
    })

    this.renderer.el.addEventListener('dragover', function (event) {
      for (var i = 0; i < event.dataTransfer.types.length; i++) {
        if (event.dataTransfer.types[i] === 'text/plain') {
          event.preventDefault()
          break
        }
      }
    })

    this.renderer.el.addEventListener('drop', (event) => {
      console.log('drop', event)
      const dataGrid = event.dataTransfer.getData('text/plain')
      const { height, width } = this.renderer.el
      const h = Math.floor(event.layerY / height * this.grid.height)
      const w = Math.floor(event.layerX / width * this.grid.width)
      console.log(h, w, dataGrid)
      this.grid.paint(h, w, dataGrid)
      this.renderer.render(false)
    })

    this.updateSpeed()
    this.play()

    this.el.appendChild(this.renderer.el)
  }

  play () {
    const afterTimeout = () => {
      this.timeout = setTimeout(afterTimeout, this.speed)
      this.renderer.render()
    }

    this.running = true
    afterTimeout()
  }

  pause () {
    this.running = false
    clearTimeout(this.timeout)
  }

  updateSpeed () {
    var value = +this.controls.rangeInput.el.value
    this.speed = Math.pow(value, 3) + 18
  }
}
