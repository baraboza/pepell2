$(function() {
	$('.product-list__item').click(function() {
		$('.product-list__item').removeClass('active');
		$(this).addClass('active');
		$('.product-image__image').prop('src', $(this).data('big-image'));
		$('.product-info__heading').text( $(this).find('.product-list__text').text() );
	});
});