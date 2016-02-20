;(function () {
  function Player (controls) {
    this.el = document.createElement('div')
    this.el.classList.add('Player')

    this.grid = new Grid(30, 60)
    this.controls = controls
    this.renderer = new Renderer(this.grid)

    var _this = this

    this.controls.playButton.el.addEventListener('click', function () {
      _this.play()
    })

    this.controls.pauseButton.el.addEventListener('click', function () {
      _this.pause()
    })

    this.controls.clearButton.el.addEventListener('click', function () {
      _this.grid.clear()
      if (!_this.running) {
        _this.renderer.render()
      }
    })

    this.controls.randomButton.el.addEventListener('click', function () {
      _this.grid.randomize()
      if (!_this.running) {
        _this.renderer.render()
      }
    })

    this.controls.rangeInput.el.addEventListener('change', function (event) {
      _this.updateSpeed()
    })

    this.renderer.el.addEventListener('dragover', function (event) {
      for (var i = 0; i < event.dataTransfer.types.length; i++) {
        if (event.dataTransfer.types[i] === 'text/plain') {
          event.preventDefault()
          break
        }
      }
    })

    this.renderer.el.addEventListener('drop', function (event) {
      console.log('drop', event)
      var dataGrid = event.dataTransfer.getData('text/plain')
      var renderer = _this.renderer
      var grid = _this.grid
      var h = Math.floor(event.layerY / renderer.el.height * grid.height)
      var w = Math.floor(event.layerX / renderer.el.width * grid.width)
      console.log(h, w, dataGrid)
      _this.grid.paint(h, w, dataGrid)
      _this.renderer.render(false)
    })

    this.updateSpeed()
    this.play()

    this.el.appendChild(this.renderer.el)
  }

  Player.prototype.play = function () {
    var _this = this
    this.running = true
    afterTimeout()

    function startTimeout () {
      _this.timeout = setTimeout(afterTimeout, _this.speed)
    }

    function afterTimeout () {
      startTimeout()
      _this.renderer.render()
    }
  }

  Player.prototype.pause = function () {
    this.running = false
    clearTimeout(this.timeout)
  }

  Player.prototype.updateSpeed = function () {
    var value = +this.controls.rangeInput.el.value
    this.speed = Math.pow(value, 3) + 18
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Player
  } else {
    this.Player = Player
  }
})()
