'use strict';

(function() {

  var pageHeader = document.querySelector('.js-page-header');
  var dialogs = pageHeader.querySelectorAll('.js-page-dialog');

  var dialogCallback = pageHeader.querySelector('.js-page-dialog-callback');
  var classCallback = 'js-page-dialog-callback';
  var btnOpenCallback = pageHeader.querySelector('.js-open-page-callback');
  var btnCloseCallback = dialogCallback.querySelector('.js-close-page-dialog');

  var ESC = 27;

  var openDialog = function(dialog, className, btnOpen, btnClose) {

    var open = function() {
      for (var i = 0; i < dialogs.length; i += 1) {
        if (!dialogs[i].classList.contains(className)) {
          dialogs[i].classList.remove('active');
        }
      }

      dialog.classList.toggle('active');
      btnOpen.classList.toggle('active');
    };

    var close = function() {
      dialog.classList.remove('active');
      btnOpen.classList.remove('active');
    }

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
    document.addEventListener('keyup', onEscKeyup);
  };

  openDialog(dialogCallback, classCallback, btnOpenCallback, btnCloseCallback);

})();
