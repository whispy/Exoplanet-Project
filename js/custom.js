function scrollTo(selector) {
	var hash = $(selector);
	var root = $('html, body');
	var hashPlus = $(hash).offset().top;
	root.scrollTop(0);
	root.animate({
	    scrollTop: hashPlus
	}, 500);
	return false;
}

function exploreClick() {
	explore.removeClass('resetDiv');
	action.addClass('resetDiv');
	whatDoFromExplore.removeClass('resetDiv');
	whatDoFromAction.addClass('resetDiv');
}

function actionClick() {
	action.removeClass('resetDiv');
	explore.addClass('resetDiv');
	whatDoFromExplore.addClass('resetDiv');
	whatDoFromAction.removeClass('resetDiv');
}

$(document).ready(function () {

	scrollTop: 0
	explore = $('#explore');
	action = $('#action');
	callToActionExplore = $('.cta a[href="#explore"]');
	callToActionAction = $('.cta a[href="#action"]');
	whatDoFromExplore = $('#whatDoFromExplore');
	whatDoFromAction = $('#whatDoFromAction');

	explore.addClass('resetDiv');
	action.addClass('resetDiv');
	whatDoFromExplore.addClass('resetDiv');
	whatDoFromAction.addClass('resetDiv');

	callToActionExplore.on('click', function(){
		exploreClick();
	})

	callToActionAction.on('click', function(){
		actionClick();
	})

	console.log(window.location.href.indexOf('#action'))
	if(window.location.href.indexOf('#action') > -1){
		var hash =window.location.hash;
		actionClick();
		setTimeout(function(){
			scrollTo(hash);
		}, 200)
		
	}

	if(window.location.href.indexOf('#explore') > -1){
		var hash =window.location.hash;
		exploreClick();
		scrollTo(hash);
	}

	var root = $('html, body');
	$('a').click(function() {
	    var href = $.attr(this, 'href');
	    var offsetPlus = $(href).offset().top + 1 + 'px';
	    root.animate({
	        scrollTop: offsetPlus
	    }, 500, function () {
	    	if((href.indexOf('#explore') > -1) || (href.indexOf('#action') > -1)) {
	      		window.location.href = href;
			}
	    });
	    return false;
	});

});