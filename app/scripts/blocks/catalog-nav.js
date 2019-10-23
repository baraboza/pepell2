'use strict';

(function() {
  var btn = document.querySelector('.js-catalog-nav-button');

  if(btn) {
    btn.addEventListener('click', function(e) {
      e.currentTarget.parentNode.classList.toggle('active');
    });
  }

})();
