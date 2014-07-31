function scrollToOnLoad(selector) {
	var hash = $(selector);
	var root = $('html, body');
	var hashPlus = $(hash).offset().top;
	root.scrollTop(0);
	setTimeout(function(){
		root.animate({
	    	scrollTop: hashPlus
		}, 600, 'easeOutQuad');
	}, 200);
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

	explore = $('#explore');
	action = $('#action');
	callToActionExplore = $('.cta a[href="#explore"]');
	callToActionAction = $('.cta a[href="#action"]');
	whatDoFromExplore = $('#whatDoFromExplore');
	whatDoFromAction = $('#whatDoFromAction');
	discoveredMany = $('a[href="#discoveredMany"]');
	earth = $('.earth');

	$('h1, p').widowFix({
		letterLimit: 10
	});

	explore.addClass('resetDiv');
	action.addClass('resetDiv');
	whatDoFromExplore.addClass('resetDiv');
	whatDoFromAction.addClass('resetDiv');

	discoveredMany.on('click', function() {
		earth.removeClass('earthsLeft');
		earth.removeClass('earthsRight');
	})

	if(window.location.href.indexOf('#whyCare') > -1){
		var hash = window.location.hash;
		scrollToOnLoad(hash);
	}

	if(window.location.href.indexOf('#action') > -1){
		var hash = window.location.hash;
		actionClick();
		scrollToOnLoad(hash);
	}

	if(window.location.href.indexOf('#explore') > -1){
		var hash = window.location.hash;
		exploreClick();
		scrollToOnLoad(hash);
	}

	callToActionExplore.on('click', function(){
		exploreClick();
	})

	callToActionAction.on('click', function(){
		actionClick();
	})

	var root = $('html, body');
	$('a').click(function() {
	    var href = $.attr(this, 'href');
	    var offsetPlus = $(href).offset().top + 1 + 'px';
	    root.animate({
	        scrollTop: offsetPlus
	    }, 500, 'easeOutQuad', function () {
	    	if((href.indexOf('#explore') > -1) || (href.indexOf('#action') > -1) || (href.indexOf('#whyCare') > -1)) {
	      		window.location.href = href;
			}
	    });
	    return false;
	});

});