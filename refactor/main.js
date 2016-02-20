;(function () {
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
