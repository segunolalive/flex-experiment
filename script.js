(function() {
  window.onload = function() {
    var article = document.getElementsByTagName('article')[0];
    var clone;
    for (var i = 0; i < 9; i++) {
      clone = article.cloneNode();
      document.body.appendChild(clone);
    }
  };
})();
