jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var btn;
    var btnsDropdown = $('.js-dropdown-button');
    var btnsFooter = $('.js-footer-nav-dropdown-button');

    if (btnsDropdown) {
      btnsDropdown.on('click', function(e){
        e.preventDefault();
        btn = $(this);
        btnsDropdown.not(btn).parents('.js-dropdown').removeClass('active');
        btn.parents('.js-dropdown').toggleClass('active');
      });
    }

    var initDropdown = function() {
      if ($(window).outerWidth() < 620) {
        btnsFooter.on('click', function(e){
          e.preventDefault();
          btn = $(this);
          btnsFooter.not(btn).parents('.js-footer-nav-dropdown').removeClass('active');
          btn.parents('.js-footer-nav-dropdown').toggleClass('active');
        });
      }
    }

    initDropdown();

    $(window).resize(function() {
      initDropdown();
    });

  });
});
