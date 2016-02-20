;(function () {
  function Grid (width, height, value) {
    this.width = width
    this.height = height
    this.grid1 = []
    this.grid2 = []
    if (value instanceof Array) {
      for (var h = 0; h < value.length; h++) {
        var arr1 = []
        var arr2 = []
        for (var w = 0; w < value[h].length; w++) {
          arr1.push(+value[h][w])
          arr2.push(+value[h][w])
        }
        this.grid1[h] = arr1
        this.grid2[h] = arr2
      }
    } else if (typeof value === 'undefined') {
      this.randomize()
    } else {
      this.fill(value)
    }
  }

  Grid.prototype.clear = function () {
    this.fill(null)
  }

  Grid.prototype.randomize = function () {
    this.fill(random)

    function random () {
      return Math.random() > 0.5 ? 1 : 0
    }
  }

  Grid.prototype.fill = function (value) {
    for (var h = 0; h < this.height; h++) {
      var row1 = []
      var row2 = []
      for (var w = 0; w < this.width; w++) {
        row1.push(typeof value === 'function' ? value() : value)
        row2.push(typeof value === 'function' ? value() : value)
      }
      this.grid1[h] = row1
      this.grid2[h] = row2
    }
  }

  Grid.prototype.copy = function () {
    var copy = []
    for (var h = 0; h < this.height; h++) {
      copy[h] = this.grid1[h].slice()
    }
    return copy
  }

  Grid.prototype.toString = function () {
    console.log(this.grid1.map(function (arr) { return arr.join('') }).join(','))
    return this.grid1.map(function (arr) { return arr.join('') }).join(',')
  }

  Grid.prototype.paint = function (posH, posW, dataGrid) {
    var arr = dataGrid.split(',')
    console.log(posH, this.height, posH + arr.length)
    for (var h = 0; h < arr.length && posH + h < this.height; h++) {
      for (var w = 0; w < arr[h].length && posW + w < this.width; w++) {
        this.grid1[posH + h][posW + w] = +arr[h][w]
        this.grid2[posH + h][posW + w] = +arr[h][w]
      }
    }
  }

  Grid.prototype.resize = function (width, height) {
    console.log('resize')
    var beforeH = Math.floor(this.height - height / 2)
    // var afterH = this.height - height - beforeH
    var beforeW = Math.floor(this.width - width / 2)
    // var afterW = this.width - width - beforeW
    var grid1 = []
    var grid2 = []
    for (var h = 0; h < height; h++) {
      var arr1 = []
      var arr2 = []
      for (var w = 0; w < width; w++) {
        if (this.grid1[h - beforeH]) {
          arr1[w] = this.grid1[h - beforeH][w - beforeW] || 0
          arr2[w] = this.grid2[h - beforeH][w - beforeW] || 0
        } else {
          arr1[w] = 0
          arr2[w] = 0
        }
      }
      grid1.push(arr1)
      grid2.push(arr2)
    }
    console.log(grid1)
    this.grid1 = grid1
    this.grid2 = grid2
    this.width = width
    this.height = height
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Grid
  } else {
    this.Grid = Grid
  }
})()
