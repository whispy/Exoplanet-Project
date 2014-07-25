$(document).ready(function () {

	var explore = $('#explore');
	var action = $('#action');
	var callToActionExplore = $('.cta a[href="#explore"]');
	var callToActionAction = $('.cta a[href="#action"]');

	explore.addClass('resetDiv');
	action.addClass('resetDiv');

	callToActionExplore.on('click', function(){
		explore.removeClass('resetDiv');
		action.addClass('resetDiv');
	})

	callToActionAction.on('click', function(){
		action.removeClass('resetDiv');
		explore.addClass('resetDiv');
	})


	var $root = $('html, body');
	$('a').click(function() {
	    var href = $.attr(this, 'href');
	    var offsetPlus = $(href).offset().top + 1 + 'px';
	    $root.animate({
	        scrollTop: offsetPlus
	    }, 500, function () {
	      
	    });
	    return false;
	});

});