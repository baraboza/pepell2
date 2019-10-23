jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var paginationBtns = $('.js-pagination-link');
    var btn;

    var toggle = function(btns) {
      btns.bind('click', function(e) {
        e.preventDefault();
        btn = $(this);
        btns.not(btn).parent().removeClass('active');
        btn.parent().toggleClass('active');
      });
    }

    if(paginationBtns.length) {
      toggle(paginationBtns);
    }

  });
});
