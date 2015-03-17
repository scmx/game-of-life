(function () {
  function Engine() {
  }
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  // document.body.appendChild(canvas);

  var width, height, grid1, grid2, currentGrid;

  speed = 100;

  function random() {
    return Math.random() > 0.5 ? 1 : 0;
  }

  function render(grid, next) {
    for (var h = 0; h < height; h++) {
      for (var w = 0; w < width; w++) {
        var cell = grid[h][w];
        context.fillStyle = cell === 1 ? '#000' : '#fff';
        context.fillRect(w*11, h*11, 10, 10);
        var neighbors = [
          grid[h-1] && grid[h-1][w-1],
          grid[h-1] && grid[h-1][w],
          grid[h-1] && grid[h-1][w+1],
          grid[h]   && grid[h][w-1],
          grid[h]   && grid[h][w+1],
          grid[h+1] && grid[h+1][w-1],
          grid[h+1] && grid[h+1][w],
          grid[h+1] && grid[h+1][w+1]
        ];
        var found = 0;
        for (var i = 0; i < neighbors.length; i++) {
          if (neighbors[i]) { found++; }
        }
        if (found === 3) {
          next[h][w] = 1;
        } else if (cell && found === 2) {
          next[h][w] = 1;
        } else {
          next[h][w] = 0;
        }
      }
    }
  }
  function frame() {
    if (currentGrid === grid1) {
      render(grid1, grid2);
      currentGrid = grid2;
    } else {
      render(grid2, grid1);
      currentGrid = grid1;
    }
  }

  function glider() {
    width = 15;
    height = 15;
    canvas.width = width*11;
    canvas.height = height*11;
    // 101
    // 011
    // 010
    grid1 = [
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    grid2 = [
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    currentGrid = grid1;
    setInterval(frame, speed);
  }

  function blinker() {
    width = 5;
    height = 5;
    canvas.width = width*11;
    canvas.height = height*11;
    grid1 = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    grid2 = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    currentGrid = grid1;
    setInterval(frame, speed);
  }

  function feelingLucky() {
    width = 50;
    height = 50;
    canvas.width = width*11;
    canvas.height = height*11;
    grid1 = [];
    grid2 = [];
    currentGrid = grid1;
    for (var w = 0; w < width; w++) {
      var row1 = [];
      var row2 = [];
      for (var h = 0; h < height; h++) {
        row1.push(random());
        row2.push(null);
      }
      grid1.push(row1);
      grid2.push(row2);
    }
    setInterval(frame, speed);
  }

  // blinker();
  // feelingLucky();
  // glider();

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Engine;
  } else {
    this.Engine = Engine;
  }
})();
