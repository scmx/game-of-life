export class RangeInput {
  constructor (min, max, step, value) {
    this.el = document.createElement('input')
    this.el.type = 'range'
    this.el.min = min
    this.el.max = max
    this.el.step = step
    this.el.value = value
  }
}
