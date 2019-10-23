'use strict';

(function() {
  var btns = document.querySelectorAll('.js-button-video');

  if(btns.length){
    var videoModal = document.querySelector('.js-modal-video');
    var video = videoModal.querySelector('.js-modal-video-iframe');
    var overlay = videoModal.querySelector('.js-modal-overlay');
    var btnClose = videoModal.querySelector('.js-modal-close');

    for (var i = 0; i < btns.length; i++) {
      var videoItem = btns[i].parentNode.parentNode;
      var atr = videoItem.getAttribute('data-video-id');
      videoItem.style.backgroundImage = 'url(https://img.youtube.com/vi/' + atr + '/0.jpg)';

      btns[i].addEventListener('click', function(e) {
        e.preventDefault();
        var btnVideo = e.currentTarget;
        var videoItem = btnVideo.parentNode.parentNode;
        var atr = videoItem.getAttribute('data-video-id');

        videoModal.classList.add('active');
        video.src = 'https://www.youtube.com/embed/' + atr+ '?enablejsapi=1&autoplay=1';
        video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      })
    }

    btnClose.addEventListener('click', function(e) {
      videoModal.classList.remove('active');
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });

    overlay.addEventListener('click', function(e) {
      videoModal.classList.remove('active');
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  }
})();
