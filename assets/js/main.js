(function() {

	'use strict';

	// Disqus
	window.disqus_shortname = 'janineandliam';

	// Scroll on arrow clicks
	$('.about__arrow').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.about').offset().top
		});
	});
}());
