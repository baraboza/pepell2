'use strict';

(function() {
  var btns = document.querySelectorAll('.js-lang-nav-link');

  if(btns.length) {
    if(parseInt(window.innerWidth, 10) < 1024) {
      for (var i = 0; i < btns.length; i += 1) {
        btns[i].addEventListener('click', function(e) {
          e.currentTarget.parentNode.classList.toggle('active');
        });
      }

      var onEscKeyup = function(e) {
        if (e.keyCode === 27) {
          e.preventDefault();
          for (var i = 0; i < btns.length; i += 1) {
             btns[i].parentNode.classList.remove('active');
          }
        }
      }

      var closeOnDoc = function(e) {
        for (var i = 0; i < btns.length; i += 1) {
          var target = e.target;
          var items = target == btns[i] || btns[i].parentNode.contains(target);
          var active = btns[i].parentNode.classList.contains('active');

          if (!items && active) {
            btns[i].parentNode.classList.remove('active');
          }
        }
      };

      var onDocClick = function(e) {
        e.preventDefault();
        closeOnDoc(e);
      };

      document.addEventListener('mouseup', onDocClick);
      document.addEventListener('keyup', onEscKeyup);
    }
  }

})();
