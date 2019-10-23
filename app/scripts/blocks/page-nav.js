'use strict';

(function() {

  var btnOpen = document.querySelector('.js-button-page-nav');

  if (btnOpen) {
    var block = document.querySelector('.js-panel-page-nav');
    var btnClose = block.querySelector('.js-panel-page-close');
    var overlay = document.querySelector('.js-page-header-overlay');
    var ESC = 27;

    var open = function() {
      block.classList.toggle('active');
      overlay.classList.toggle('active');
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
    btnClose.addEventListener('click', onBtnCloseClick);
    overlay.addEventListener('click', onBtnCloseClick);
    document.addEventListener('keyup', onEscKeyup);
  }

})();
