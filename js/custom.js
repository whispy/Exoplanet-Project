var EXO_FIREBASE = "https://planetary.firebaseio.com/";
var exoplanets = new Firebase(EXO_FIREBASE);


function scrollToOnLoad(selector) {
	var hash = $(selector);
	hash.velocity("scroll", {duration: 600, offset: 2});
	return false;
}

function circulateStart() {

		$("#loading1").circulate({
		    speed: 400,                  // Speed of each quarter segment of animation, 1000 = 1 second
		    height: 20,                 // Distance vertically to travel
		    width: 200,                  // Distance horizontally to travel
		    sizeAdjustment: 160,         // Percentage to grow or shrink
		    loop: true,                 // Circulate continuously
		    zIndexValues: [1, 3, 3, 1]   // Sets z-index value at each stop of animation
		});

		$("#loading2").circulate({
		    speed: 400,                  // Speed of each quarter segment of animation, 1000 = 1 second
		    height: 5,                 // Distance vertically to travel
		    width: 5,                  // Distance horizontally to travel
		    sizeAdjustment: 100,         // Percentage to grow or shrink
		    loop: true,                 // Circulate continuously
		    zIndexValues: [2, 2, 2, 2]   // Sets z-index value at each stop of animation
		});

		$("#loading3").circulate({
		    speed: 300,                  // Speed of each quarter segment of animation, 1000 = 1 second
		    height: 20,                 // Distance vertically to travel
		    width: 300,                  // Distance horizontally to travel
		    sizeAdjustment: 160,         // Percentage to grow or shrink
		    loop: true,                 // Circulate continuously
		    zIndexValues: [1,3, 3, 1]   // Sets z-index value at each stop of animation
		});
	}


function updateCards(planets, skip) {
        	$('#loadingIconContainer').addClass('loadingIconReset');
        	$("#loading1").circulate("Stop");
			$("#loading2").circulate("Stop");
			$("#loading3").circulate("Stop");
        	$('#loadMore').removeClass('resetDiv');
          skip = skip || 1;
          console.log(planets);
          for(i=10*skip-10;i<10*skip;i++) {
            var card = ["<div class=\"content planetsCard\">",
                      "<div class=\"cardLeft\">",
                      "<h3 id=\"planet"+i+"\">"+planets[i][0]+"</h3>",
                      "<div class=\"earth13\"></div>",
                      "</div>",
                      "<div class=\"planetsInfo cardRight\">",
                      "<h5>blah blah blah blah blah blah filler text until we get descriptive sentences hooked up</h5>",
                      "<h4><span class=\"hoverInfoDiscovery\">Discovery Method<sup>?</sup></span>:</h4>",
                      "<p class=\"detailText\" id=\"value1\">"+planets[i][13]+"</p>",
                      "<h4>Discovery Year:</h4>",
                      "<p class=\"detailText\" id=\"value3\">"+planets[i][14]+"</p>",
                      "<h4><span class=\"hoverInfoMass\">Mass (m<sub>JUP</sub>)<sup>?</sup></span>:</h4>",
                      "<p class=\"detailText\" id=\"value2\">"+planets[i][3]+"</p>",
                      "<h4><span class=\"hoverInfoTemp\">Temperature (K)<sup>?</sup></span>:</h4>",
                      "<p class=\"detailText\" id=\"value2\">"+planets[i][11]+" K</p>",
                      "<h4>Age:</h4>",
                      "<p class=\"detailText\" id=\"value4\">"+planets[i][12]+"</p>",
                      "<h4>Info heading:</h4>",
                      "<p class=\"detailText\" id=\"value4\">Some informative text goes here</p>",
                      "</div>",
                      "</div>"].join('\n');
            $(".planetsGrid .flexContainer").append(card);
          }
        }

function exploreClick() {
	var planets = [];
	exoplanets.on('value', function(snap) {
		var count = 0;
          $.each(snap.val(), function(index, value) {
            planets.push(value);
            count++;
          });
		updateCards(planets);
	});
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

$(window).load(function() {
	$('h1, p').widowFix({
		letterLimit: 10
	});
});

$(document).ready(function () {

	var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent),
		isIE = document.documentMode;

	var earthsCount = isMobile ? (isAndroid ? 40 : 60) : (isChrome ? 100 : 90),
	earthsHtml = ""

	for (var i = 0; i < earthsCount; i++) {
		earthsHtml += "<div class='earthOutContainer'><div class='earthContainer earth'><div class='earthInner'></div></div></div>";
	}

	$(earthsHtml).prependTo(discoveredMany);

	explore = $('#explore');
	action = $('#action');
	callToActionExplore = $('.cta a[href="#explore"]');
	callToActionAction = $('.cta a[href="#action"]');
	whatDoFromExplore = $('#whatDoFromExplore');
	whatDoFromAction = $('#whatDoFromAction');
	discoveredMany = $('#discoveredMany');
	discoveredManyH1 = $('#discoveredMany h1');
	visitedOne = $('#visitedOne');
	whatDo = $('#whatDo');
	whyCareButton = $('a[href="#whyCare"]');
	cta = $('.cta');
	discoveredManyEarth = $('#discoveredMany .earth');
	visitedOneEarth = $('#visitedOne .earth');
	visitedOneH1 = $('#visitedOne h1');
	earth1 = $('#earth1');
	earthContainer = $('.earthContainer')

	function r (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	circulateStart();

	earth1.addClass('resetDiv');
	earthContainer.addClass('noAnim');
	earthContainer.addClass('earthsPop');
	discoveredManyH1.addClass('earthOpacity')
	visitedOneEarth.addClass('earthOpacity');
	visitedOneH1.addClass('earthOpacity');
	discoveredManyEarth.addClass('earthOpacity');
	visitedOneH1.addClass('noAnim');
	discoveredManyH1.addClass('noAnim');
	explore.addClass('resetDiv');
	action.addClass('resetDiv');
	whatDoFromExplore.addClass('resetDiv');
	whatDoFromAction.addClass('resetDiv');


	visitedOne.waypoint(function() {
		setTimeout(function(){
			visitedOneEarth.removeClass('earthOpacity');
			earth1.removeClass('resetDiv');
			earth1.addClass('earthOneAnimate');
			visitedOneH1.removeClass('noAnim');
			visitedOneH1.addClass('visitedOneH1Animate');
			visitedOneH1.removeClass('earthOpacity');
		}, 400);
	}, { offset: '50%'});

	var screenWidth = window.screen.availWidth;
	var docWidth = $(window).width();
	var screenHeight = window.screen.availHeight;

		
	discoveredMany.waypoint(function() {
		$('.earthOutContainer').css({
			width: docWidth,
			heiht: screenHeight,
		})
		discoveredManyEarth.removeClass('noAnim');
		discoveredManyH1.removeClass('noAnim');
		setTimeout(function() {
			discoveredManyEarth.removeClass('earthOpacity');
		},650)
		setTimeout(function(){
			
			//console.log(r(0, 50) + '%')
			/*$('.earthOutContainer')
				.velocity({
					translateX: [
						function() { return r(0, 100) + '%'}
					]
				})*/
			$('.earthsPop')
				.velocity({	
					translateX: [ 
						function() { return r(-screenWidth, screenWidth) + '%' }
					], 
					translateY: [
						function() { return r(-screenHeight, screenHeight*2) + '%' }
					],
					width: [
						function() { return r(1, 6) + '%' }
 					],
				}, 1000)
		}, 650);
		setTimeout(function(){
				$('.earthOutContainer')
					.velocity({
						rotateZ: [
							function() {return r(-3600, -6000)}
						]
					}, 180000, "linear");
		}, 2000)
		setTimeout(function(){
			discoveredManyH1.removeClass('earthOpacity');
		}, 2100)
	}, { offset: '70%'});

	discoveredMany.waypoint(function(direction) {
  		if (direction === 'down') {
  			$('.earthOutContainer').velocity("stop");
  		}

  		else {
  			$('.earthOutContainer').velocity({rotateZ: '-3600deg'}, 100000, "linear");
  		}
	}, {
  		offset: function() {
    		return -$(this).height();
  		}
	});


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
		setTimeout(function() {
			$('.earthOutContainer').velocity("stop");
		}, 2100);
		scrollToOnLoad(hash);
	}

	if(window.location.href.indexOf('#action') > -1){
		var hash = window.location.hash;
		setTimeout(function() {
			$('.earthOutContainer').velocity("stop");
		}, 2100);
		actionClick();
		scrollToOnLoad(hash);
	}

	if(window.location.href.indexOf('#explore') > -1){
		var hash = window.location.hash;
		setTimeout(function() {
			$('.earthOutContainer').velocity("stop");
		}, 2100);
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

	$('a').click(function() {
	    var href = $.attr(this, 'href');
	    var hrefFunc = $(href)
	    hrefFunc.velocity("scroll", {duration: 600, offset: 1});
	    if((href.indexOf('#explore') > -1) || (href.indexOf('#action') > -1) || (href.indexOf('#whyCare') > -1)) {
	    	$('.earthOutContainer').velocity("stop");
	      	window.location.href = href;
		}
	    return false;
	});
        
	var planets = [];
	var skip = 1;
	$("#loadMore a").click(function() {
        circulateStart();
        $('#loadingIconContainer').removeClass('loadingIconReset');
		skip++;
		updateCards(planets, skip);
		$('#loadingIconContainer').addClass('loadingIconReset');
	});

	exoplanets.on('value', function(snap) {
		var count = 0;
		$.each(snap.val(), function(index, value) {
			planets.push(value);
			count++;
		});
		setHowMany(count);
	});

	function setHowMany(planets) {
		console.log(planets);
		$("#howMany").html(function() {
			return planets+" <br />";
		});
	}
});
