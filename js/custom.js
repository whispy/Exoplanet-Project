var EXO_FIREBASE = "https://planetary.firebaseio.com/";
var exoplanets = new Firebase(EXO_FIREBASE);

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
	discoveredManyH1 = $('#discoveredMany h1');
	visitedOne = $('#visitedOne');
	whatDo = $('#whatDo');
	whyCareButton = $('a[href="#whyCare"]');
	cta = $('.cta');
	discoveredManyEarth = $('#discoveredMany .earth');
	visitedOneEarth = $('#visitedOne .earth');
	visitedOneH1 = $('#visitedOne h1');
	earth1 = $('#earth1');
	earthContainerRight = [$('#earthContainer2'), $('#earthContainer5'), $('#earthContainer7'), $('#earthContainer9'), $('#earthContainer10'), $('#earthContainer5'), $('#earthContainer14'), $('#earthContainer16'), $('#earthContainer18'), $('#earthContainer20')];
	earthContainerLeft = [$('#earthContainer3'), $('#earthContainer4'), $('#earthContainer6'), $('#earthContainer8'), $('#earthContainer11'), $('#earthContainer12'), $('#earthContainer15'), $('#earthContainer17'), $('#earthContainer19')];

	$('h1, p').widowFix({
		letterLimit: 10
	});

	$("#loadingIcon").circulate({
	    speed: 400,                  // Speed of each quarter segment of animation, 1000 = 1 second
	    height: 50,                 // Distance vertically to travel
	    width: 200,                  // Distance horizontally to travel
	    sizeAdjustment: 160,         // Percentage to grow or shrink
	    loop: true,                 // Circulate continuously
	    zIndexValues: [1, 1, 1, 1]   // Sets z-index value at each stop of animation
	});

	earth1.addClass('resetDiv');
	earthContainerRight.forEach(function(element) {
		element.addClass('noAnim');
		element.addClass('earthsRight');
	});
	earthContainerLeft.forEach(function(element) {
		element.addClass('noAnim');
		element.addClass('earthsLeft');
	});
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

		
	discoveredMany.waypoint(function() {
		discoveredManyEarth.removeClass('noAnim');
		discoveredManyH1.removeClass('noAnim');
		setTimeout(function(){
			setTimeout(function() {
				discoveredManyEarth.removeClass('earthOpacity');
			}, 300);
			discoveredManyEarth.removeClass('earthsLeft');
			discoveredManyEarth.removeClass('earthsRight');
		}, 100);
		setTimeout(function(){
			discoveredManyH1.removeClass('earthOpacity');
		}, 2100)
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
	    var offsetPlus = $(href).offset().top;
	    root.animate({
	        scrollTop: offsetPlus
	    }, 500, 'easeOutQuad', function () {
	    	if((href.indexOf('#explore') > -1) || (href.indexOf('#action') > -1) || (href.indexOf('#whyCare') > -1)) {
	      		window.location.href = href;
			}
	    });
	    return false;
	});
        

        function updateCards(planets, skip) {
        	//$('#loadingIcon').addClass('resetDiv');
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
                      "<h5></h5>",
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

        var planets = [];
        var skip = 1;
        $("#loadMore a").click(function() {
          skip++;
          updateCards(planets, skip);
        });

        exoplanets.on('value', function(snap) {
          var count = 0;
          $.each(snap.val(), function(index, value) {
            planets.push(value);
            count++;
          });
          setHowMany(count);
          updateCards(planets);
        });

        function setHowMany(planets) {
          console.log(planets);
          $("#howMany").html(function() {
            return planets+" <br />";
          });
        }
});
