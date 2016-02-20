export class Renderer {
  constructor (grid) {
    this.grid = grid
    this.currentGrid = this.grid.grid1

    this.el = document.createElement('canvas')
    this.updateSize()

    this.context = this.el.getContext('2d')
    this.context.fillStyle = '#ddd'
    this.context.fillRect(0, 0, this.el.width, this.el.height)
  }

  render (mutate) {
    var grid, next
    var decider = this.currentGrid === this.grid.grid1
    if (mutate === false ? !decider : decider) {
      grid = this.grid.grid1
      next = this.grid.grid2
      this.currentGrid = this.grid.grid2
    } else {
      grid = this.grid.grid2
      next = this.grid.grid1
      this.currentGrid = this.grid.grid1
    }

    for (var h = 0; h < this.grid.height; h++) {
      for (var w = 0; w < this.grid.width; w++) {
        var cell = grid[h][w]
        this.context.fillStyle = cell === 1 ? '#000' : '#fff'
        this.context.fillRect(w * 11, h * 11, 10, 10)
        if (mutate === false) { continue }
        var neighbors = [
          grid[h - 1] && grid[h - 1][w - 1],
          grid[h - 1] && grid[h - 1][w],
          grid[h - 1] && grid[h - 1][w + 1],
          grid[h] && grid[h][w - 1],
          grid[h] && grid[h][w + 1],
          grid[h + 1] && grid[h + 1][w - 1],
          grid[h + 1] && grid[h + 1][w],
          grid[h + 1] && grid[h + 1][w + 1]
        ]
        var found = 0
        for (var i = 0; i < neighbors.length; i++) {
          if (neighbors[i]) { found++ }
        }
        if (found === 3) {
          next[h][w] = 1
        } else if (cell && found === 2) {
          next[h][w] = 1
        } else {
          next[h][w] = 0
        }
      }
    }
  }

  updateSize () {
    this.el.width = this.grid.width * 11 - 1
    this.el.height = this.grid.height * 11 - 1
  }
}
