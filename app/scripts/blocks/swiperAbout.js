'use strict';

(function() {

  var textSlider = new Swiper('.js-about-slider-text', {
    slidesPerView: 1,
    touchRatio: 0,
    grabCursor: false,
    autoHeight: false,
    thumbs: {
      swiper: imageSlider,
    },
    navigation: {
      nextEl: '.js-about-slider-next',
      prevEl: '.js-about-slider-prev',
      clickable: true,
      disabledClass: 'disabled',
    },
    breakpoints: {
      767: {
        grabCursor: true,
        autoHeight: true,
        touchRatio: 1,
      }
    }
  });

  var imageSlider = undefined;

  function initSlider() {
    var screenWidth = parseInt(window.innerWidth, 10);
    if ( (screenWidth > (767)) && (imageSlider == undefined)) {
      var imageSlider = new Swiper('.js-about-slider-image', {
        slidesPerView: 1,
        watchSlidesVisibility: true,
        touchRatio: 0,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.js-about-slider-next',
          prevEl: '.js-about-slider-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
      });
    } else if ((screenWidth < 768) && (imageSlider != undefined)) {
      imageSlider.destroy();
      imageSlider = undefined;
    }
  }

  initSlider();

  window.addEventListener('resize', function() {
    initSlider();
  });

})();
