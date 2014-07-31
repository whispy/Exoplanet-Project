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
	discoveredMany = $('#discoveredMany');
	visitedOne = $('#visitedOne');
	whatDo = $('#whatDo');
	whyCareButton = $('a[href="#whyCare"]');
	cta = $('.cta');
	earth = $('.earth');
	earth1 = $('#earth1');
	earthContainerRight = [$('#earthContainer2'), $('#earthContainer5'), $('#earthContainer7'), $('#earthContainer9'), $('#earthContainer10'), $('#earthContainer5'), $('#earthContainer14'), $('#earthContainer16')];
	earthContainerLeft = [$('#earthContainer3'), $('#earthContainer4'), $('#earthContainer6'), $('#earthContainer8'), $('#earthContainer11'), $('#earthContainer12'), $('#earthContainer15')];

	$('h1, p').widowFix({
		letterLimit: 10
	});

	earth1.addClass('resetDiv');
	earthContainerRight.forEach(function(element) {
		element.addClass('earthsRight');
	});
	earthContainerLeft.forEach(function(element) {
		element.addClass('earthsLeft');
	});
	explore.addClass('resetDiv');
	action.addClass('resetDiv');
	whatDoFromExplore.addClass('resetDiv');
	whatDoFromAction.addClass('resetDiv');

	visitedOne.waypoint(function() {
		earth1.removeClass('resetDiv');
		earth1.addClass('earthOneAnimate');
	}, { offset: '50%'});

	discoveredMany.waypoint(function() {
		earth.removeClass('earthsLeft');
		earth.removeClass('earthsRight');
	}, { offset: '70%'});

	whatDo.waypoint(function() {
		cta.addClass('ctaEnterAnimate');
		setTimeout(function(){
				cta.removeClass("ctaEnterAnimate");
		}, 1000);
	}, { offset: '80%'});

	whatDoFromExplore.waypoint(function() {
		cta.addClass('ctaEnterAnimate');
		setTimeout(function(){
				cta.removeClass("ctaEnterAnimate");
		}, 1000);
	}, { offset: '80%'});

	whatDoFromAction.waypoint(function() {
		cta.addClass('ctaEnterAnimate');
		setTimeout(function(){
				cta.removeClass("ctaEnterAnimate");
		}, 1000);
	}, { offset: '80%'});


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

	whyCareButton.on('click', function(){
		_paq.push(['trackEvent', 'Slides', 'Scroll to: Why Should You Care?']);
	})

	callToActionExplore.on('click', function(){
		_paq.push(['trackEvent', 'Call To Action', 'Explore']);
		exploreClick();
	})

	callToActionAction.on('click', function(){
		_paq.push(['trackEvent', 'Call To Action', 'Action']);
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