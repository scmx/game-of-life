(function () {
  function RangeInput(min, max, step, value) {
    this.el = document.createElement('input');
    this.el.type = 'range';
    this.el.min   = min;
    this.el.max   = max;
    this.el.step  = step;
    this.el.value = value;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = RangeInput;
  } else {
    this.RangeInput = RangeInput;
  }
})();
