;(function () {
  function Editor (controls) {
    this.el = document.createElement('div')
    this.el.classList.add('Editor')

    this.controls = controls
    this.updateSize()

    this.grid = new Grid(this.size, this.size, 0)
    this.renderer = new Renderer(this.grid)
    this.renderer.el.addEventListener('mousedown', onMouseDown)
    this.renderer.render(false)

    this.el.appendChild(this.renderer.el)

    var _this = this

    this.controls.rangeInput.el.addEventListener('change', function (event) {
      _this.updateSize()
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

    function start () {
      console.log('start')
      _this.renderer.el.addEventListener('mousemove', onMouseMove)
      _this.renderer.el.addEventListener('mouseleave', onMouseLeave)
      window.addEventListener('mouseup', onMouseUp)
    }

    function pause () {
      console.log('pause')
      _this.renderer.el.removeEventListener('mousemove', onMouseMove)
      _this.renderer.el.addEventListener('mouseenter', onMouseEnter)
    }

    function unpause () {
      console.log('unpause')
      _this.renderer.el.addEventListener('mousemove', onMouseMove)
    }

    function stop () {
      console.log('stop')
      _this.renderer.el.removeEventListener('mousemove', onMouseMove)
      _this.renderer.el.removeEventListener('mouseleave', onMouseLeave)
      _this.renderer.el.removeEventListener('mouseenter', onMouseEnter)
      window.removeEventListener('mouseup', onMouseUp)
    }

    function paintGridAt (event) {
      var color = event.altKey ? 0 : 1
      var renderer = _this.renderer
      var h = Math.floor(event.layerY / renderer.el.height * _this.size)
      var w = Math.floor(event.layerX / renderer.el.width * _this.size)
      _this.grid.grid1[h][w] = color
      _this.grid.grid2[h][w] = color
      _this.renderer.render(false)
    }
  }

  Editor.prototype.generatePreset = function () {
    return new Preset(
      'unnamed',
      this.grid,
      this.renderer.el.toDataURL('image/png')
    )
  }

  Editor.prototype.updateSize = function () {
    var value = +this.controls.rangeInput.el.value
    this.size = value
    if (this.grid) {
      this.grid.resize(value, value)
      this.renderer.updateSize()
      this.renderer.render(false)
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Editor
  } else {
    this.Editor = Editor
  }
})()
