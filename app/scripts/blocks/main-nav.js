'use strict';

(function() {

  var btnOpen = document.querySelector('.js-button-nav');

  if(btnOpen) {

    var block = document.querySelector('.js-panel-main-nav');
    var btnClose = block.querySelector('.js-panel-main-close');
    var overlay = document.querySelector('.js-header-overlay');
    var ESC = 27;

    var open = function() {
      block.classList.add('active');
      overlay.classList.add('active');
    };

    var close = function() {
      block.classList.remove('active');
      overlay.classList.remove('active');
    };

    var onBtnOpenClick = function(e) {
      e.preventDefault();
      open();
    };

    var onBtnCloseClick = function(e) {
      e.preventDefault();
      close();
    };

    var onEscKeyup = function(e) {
      if (e.keyCode === ESC) {
        e.preventDefault();
        close();
      }
    };

    btnOpen.addEventListener('click', onBtnOpenClick);
    overlay.addEventListener('click', onBtnCloseClick);
    btnClose.addEventListener('click', onBtnCloseClick);
    document.addEventListener('keyup', onEscKeyup);
  }

})();
