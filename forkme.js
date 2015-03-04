var username = 'scmx';
var reponame = 'game-of-life';

getJSON('https://api.github.com/users/' + username, function(data) {
  var user = data;
  var forkMe = new ForkMe(user.avatar_url);
  document.body.appendChild(forkMe.el);
});

function ForkMe(url) {
  this.img = document.createElement('img');
  this.img.src = url;

  this.el = document.createElement('a');
  this.el.href = 'https://github.com/' + username + '/' + reponame;
  this.el.appendChild(this.img);
  this.el.classList.add('ForkMe');
  this.el.title = 'View the GitHub repo';
}

function getJSON(url, success, error) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      success(data);
    } else {
      // We reached our target server, but it returned an error
      if (typeof error === 'function') { error(request); }
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    if (typeof error === 'function') { error(request); }
  };

  request.send();
}
