(function (exports) {
  function PlayButton() {
    this.el = document.createElement('button');
    this.el.innerHTML = '&rtrif;';
    this.el.classList.add('PlayButton');
    this.el.classList.add('Button');
  }

  function PauseButton() {
    this.el = document.createElement('button');
    this.el.innerHTML = '&equals;';
    this.el.classList.add('PauseButton');
    this.el.classList.add('Button');
  }

  function ClearButton() {
    this.el = document.createElement('button');
    this.el.innerHTML = '&times;';
    this.el.classList.add('ClearButton');
    this.el.classList.add('Button');
  }

  function RandomButton() {
    this.el = document.createElement('button');
    this.el.innerHTML = '&quest;';
    this.el.classList.add('RandomButton');
    this.el.classList.add('Button');
  }

  function SaveButton() {
    this.el = document.createElement('button');
    this.el.innerHTML = '&rArr;';
    this.el.classList.add('SaveButton');
    this.el.classList.add('Button');
  }

  this.PlayButton = PlayButton;
  this.PauseButton = PauseButton;
  this.ClearButton = ClearButton;
  this.RandomButton = RandomButton;
  this.SaveButton = SaveButton;
}).call(
  typeof module === 'undefined' ? this : module.exports = module.exports || {}
);
