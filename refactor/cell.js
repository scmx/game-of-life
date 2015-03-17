(function () {
  function Cell() {
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Cell;
  } else {
    this.Cell = Cell;
  }
})();
