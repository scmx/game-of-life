;(function () {
  var EditorControls = window.EditorControls
  var PlayerControls = window.PlayerControls
  var Footer = window.Footer
  var Header = window.Header
  var Player = window.Player

  var wrapper = document.createElement('div')
  var playerControls = new PlayerControls()
  var editorControls = new EditorControls()
  var header = new Header(playerControls)
  var player = new Player(playerControls)
  var footer = new Footer(editorControls)

  wrapper.classList.add('PlayerWrapper')
  wrapper.appendChild(player.el)
  wrapper.appendChild(footer.el)

  document.body.appendChild(header.el)
  document.body.appendChild(wrapper)
})()
