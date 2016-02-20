export class PlayButton {
  constructor () {
    this.el = document.createElement('button')
    this.el.innerHTML = '&rtrif;'
    this.el.classList.add('PlayButton')
    this.el.classList.add('Button')
  }
}

export class PauseButton {
  constructor () {
    this.el = document.createElement('button')
    this.el.innerHTML = '&equals;'
    this.el.classList.add('PauseButton')
    this.el.classList.add('Button')
  }
}

export class ClearButton {
  constructor () {
    this.el = document.createElement('button')
    this.el.innerHTML = '&times;'
    this.el.classList.add('ClearButton')
    this.el.classList.add('Button')
  }
}

export class RandomButton {
  constructor () {
    this.el = document.createElement('button')
    this.el.innerHTML = '&quest;'
    this.el.classList.add('RandomButton')
    this.el.classList.add('Button')
  }
}

export class SaveButton {
  constructor () {
    this.el = document.createElement('button')
    this.el.innerHTML = '&rArr;'
    this.el.classList.add('SaveButton')
    this.el.classList.add('Button')
  }
}
