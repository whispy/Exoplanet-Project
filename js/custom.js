function scrollToOnLoad(selector) {
  var hash = $(selector);
  var root = $('html, body');
  var hashPlus = $(hash).offset().top;
  setTimeout(function(){
    root.animate({
      scrollTop: hashPlus
    }, 600, 'easeOutQuad');
  }, 200);
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
  var curPlanets = planets.slice(10*skip-10, 10*skip);
  for(i=0;i<curPlanets.length;i++) { //stuff should say 'N/A' unless there is data to fill it.
    //tr.append("td").text(function(planet){ return $("mass",$(planet)).text(); });
    //$(curPlanets[i]).find("name").text() 
    var card = ["<div class=\"content planetsCard\">",
      "<div class=\"cardLeft\">",
      "<h3 id=\"planet"+i+"\">"+$(curPlanets[i]).find("name").first().text()+"</h3>",
      "<div class=\"earth13\"></div>",
      "<p class=\"hot\">H</p>",
      "<div class=\"tempSmall\"></div>",
      "</div>",
      "<div class=\"planetsInfo cardRight\">",
      "<h5>"+($(curPlanets[i]).find("description").text()!==""?$(curPlanets[i]).find("description").text() : "Unfortunately, there is currently no available description of this planet.")+"</h5>",
      "<h4><span class=\"hoverInfoDiscovery\">Discovery Method<sup>?</sup></span>:</h4>",
      "<p class=\"detailText\" id=\"value1\">"+($(curPlanets[i]).find("discoverymethod").text()!==""?$(curPlanets[i]).find("discoverymethod").text() : "N/A")+"</p>",
      "<h4>Discovery Year:</h4>",
      "<p class=\"detailText\" id=\"value2\">"+($(curPlanets[i]).find("discoveryyear").text()!==""?$(curPlanets[i]).find("discoveryyear").text() : "N/A")+"</p>",
      "<h4><span class=\"hoverInfoMass\">Mass (m<sub>JUP</sub>)<sup>?</sup></span>:</h4>",
      "<p class=\"detailText\" id=\"value3\">"+($(curPlanets[i]).find("mass").text()!==""?$(curPlanets[i]).find("mass").text() : "N/A")+"</p>",
      "<h4><span class=\"hoverInfoTemp\">Temperature (K)<sup>?</sup></span>:</h4>",
      "<p class=\"detailText\" id=\"value4\">"+($(curPlanets[i]).find("temperature").text()!==""?$(curPlanets[i]).find("temperature").text() : "N/A")+"</p>",
      "<h4>Star's Mass:</h4>",
      "<p class=\"detailText\" id=\"value5\">"+($(curPlanets[i]).parent().find("mass").first().text()!==""?$(curPlanets[i]).parent().find("mass").first().text() : "N/A")+"</p>",
      "<h4><span class=\"hoverInfoTemp\">Star's Temperature (K)<sup>?</sup></span>:</h4>",
      "<p class=\"detailText\" id=\"value6\">"+($(curPlanets[i]).parent().find("temperature").last().text()!==""?$(curPlanets[i]).parent().find("temperature").last().text() : "N/A")+"</p>",
      "</div>",
      "</div>"].join('\n');
      $(".planetsContainer #planetsLeftColumn").append(card);
      $(".planetsContainer .flexContainer").append(card);
  }

  var getTemp = $('.planetsCard .cardRight').each(function() { // Apply color to planet based on temperature.
    var tempEach = $(this).find('#value4').text();
    //console.log(tempEach);

    if(tempEach <= 300) {
      $(this).parent().find('.earth13').css({'background-color': '#7eb9e8'})
      $(this).parent().find('.tempSmall').addClass('temp1')
    }

    if(tempEach >= 301 && tempEach <= 500) {
      $(this).parent().find('.earth13').css({'background-color': '#95c7de'})
      $(this).parent().find('.tempSmall').addClass('temp2')
    }

    if(tempEach >= 501 && tempEach <= 800) {
      $(this).parent().find('.earth13').css({'background-color': '#b0d8d3'})
      $(this).parent().find('.tempSmall').addClass('temp3')
    }

    if(tempEach >= 801 && tempEach <= 1100) {
      $(this).parent().find('.earth13').css({'background-color': '#fce493'})
      $(this).parent().find('.tempSmall').addClass('temp4')
    }

    if(tempEach >= 1101 && tempEach <= 1500) {
      $(this).parent().find('.earth13').css({'background-color': '#e99f65'})
      $(this).parent().find('.tempSmall').addClass('temp5')
    }

    if(tempEach >= 1501 && tempEach <= 2000) {
      $(this).parent().find('.earth13').css({'background-color': '#d05c3e'})
      $(this).parent().find('.tempSmall').addClass('temp6')
    }

    if(tempEach >= 2001) {
      $(this).parent().find('.earth13').css({'background-color': '#c84531'})
      $(this).parent().find('.tempSmall').addClass('temp7')
    }	
  })
}

function exploreClick() {
  circulateStart();
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

function setReasonsHeight() { // Fix text overrunning reasons containers on small widths
  var docHeight = $(window).height();
  var getHeight = $('.slide .reasons').each(function() {
    var heightEach = $(this).height();
    var heightEachPlus = heightEach + 150;
    if (heightEachPlus > docHeight) {
      $(this).parent().css({'height': heightEachPlus})
    }
    else {
      $(this).parent().css({'height': ''})
    }
  })
}

function orbitAnimation() {
  var earthsCount = isMobile ? (isAndroid ? 40 : 60) : (isChrome ? 40 : 60)
  var	earthsHtml = ""

  for (var i = 0; i < earthsCount; i++) {
    earthsHtml += "<div class='earthOutContainer'><div class='earthContainer earth'><div class='earthInner'></div></div></div>";
  }

  $(earthsHtml).prependTo(discoveredMany);

  function colorPicker() {
    var colors = ['rgb(248,192,91)', 'rgb(189,24,56)', 'rgb(52,219,159)', 'rgb(219,139,52)', 'rgb(42,130,189)'];
    $('.earthInner').each(function() {
      $(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
    });
  }
  earthContainer = $('.earthContainer');
  colorPicker();
}

$(window).load(function() {
  $('h1, p').widowFix({
    letterLimit: 10
  });

  setReasonsHeight();

});

$(document).ready(function () {

  /* Global Variables */
    explore = $('#explore');
    action = $('#action');
    callToActionExplore = $('.cta a[href="#explore"]');
    callToActionAction = $('.cta a[href="#action"]');
    overlayGrid = $('#overlayGrid');
    whatDoFromExplore = $('#whatDoFromExplore');
    whatDoFromAction = $('#whatDoFromAction');
    discoveredMany = $('#discoveredMany');
    discoveredManyH1 = $('#discoveredMany h1');
    visitedOne = $('#visitedOne');
    whatDo = $('#whatDo');
    whyCareButton = $('a[href="#whyCare"]');
    loadMore = $('a[href="#loadMore"]');
    cta = $('.cta');
    discoveredManyEarth = $('#discoveredMany .earth');
    visitedOneEarth = $('#visitedOne .earth');
    visitedOneH1 = $('#visitedOne h1');
    earth1 = $('#earth1');
  /* End Global Variables */

  /* Browser Checking */
    isWebkit = /Webkit/i.test(navigator.userAgent),
    isChrome = /Chrome/i.test(navigator.userAgent),
    isMobile = !!("ontouchstart" in window),
    isAndroid = /Android/i.test(navigator.userAgent),
    isIE = document.documentMode;
  /* End Browser Checking */

  /* Calculate & Add Planets To Slide 4  */
  orbitAnimation();
  /* End Calculate & Add Planets To Slide 4  */

  /* Do Maths */
    function r (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  /* End Do Maths */

  /* Add Classes At Load */
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
  /*End Add Classes At Load*/

  /* Waypoints */
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
    var screenHeight = $(window).height();
    discoveredMany.waypoint(function() {
      $('.earthOutContainer').css({
        width: docWidth,
        height: screenHeight,
      })
      discoveredManyEarth.removeClass('noAnim');
      discoveredManyH1.removeClass('noAnim');
      setTimeout(function() {
        discoveredManyEarth.removeClass('earthOpacity');
      },650)
      setTimeout(function(){
        $('.earthsPop')
        .velocity({	
          translateX: [ 
            function() { return r(-screenWidth, screenWidth) + '%' }
          ], 
          translateY: [
            function() { return r(-screenHeight, screenHeight) + '%' }
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
      }, 2500)
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
  /* End Waypoints */

  /* Do At Load, Depending On Hash */
    var hashArray = ['#howManyVisited', '#visitedOne', '#howManyDiscovered','#whyCare', '#firstReason', '#secondReason', '#thirdReason', '#fourthReason', '#fifthReason', '#sixthReason']
    if($.inArray(window.location.hash, hashArray) > -1){
      var hash = window.location.hash;
      setTimeout(function() {
        $('.earthOutContainer').velocity("stop");
      }, 2500);
      scrollToOnLoad(hash);
    }

    if(window.location.href.indexOf('#action') > -1){
      var hash = window.location.hash;
      setTimeout(function() {
        $('.earthOutContainer').velocity("stop");
      }, 2500);
      actionClick();
      scrollToOnLoad(hash);
    }

    if(window.location.href.indexOf('#explore') > -1){
      var hash = window.location.hash;
      setTimeout(function() {
        $('.earthOutContainer').velocity("stop");
      }, 2500);
      exploreClick();
      scrollToOnLoad(hash);
    }
  /* End Do At Load, Depending On Hash */

  /* Piwik Events & Clicks */
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

    loadMore.on('click', function(){
      _paq.push(['trackEvent', 'Load More', 'Load More Planets']);
    })
  /* Piwik Events */

  /* Animate ScrollTo On Click*/
    var root = $('html, body');
    $('a').on("click", function() {
      var href = $.attr(this, 'href');
      var offsetPlus = $(href).offset().top;
      root.animate({
        scrollTop: offsetPlus
      }, 500, 'easeOutQuad', function() {
        $('.earthOutContainer').velocity("stop");
        if(href != '#loadMore'){
          window.location.href = href;
        }
        if(href === '#overlayGrid')
        {
          overlayGrid.removeClass('resetDiv');
        }
        if(href === '#filterBar')
        {
          overlayGrid.addClass('resetDiv');
        }
      });
      return false;
    });
  /* End Animate ScrollTo On Click*/

  /* Add Cards When Clicking Load More & Set Planets Counter On Slide 4*/
    var planets = [];
    var skip = 1;
    $("#loadMore a").click(function() {
      circulateStart();
      $('#loadingIconContainer').removeClass('loadingIconReset');
      skip++;
      console.log(planets);
      updateCards(planets, skip);
      $('#loadingIconContainer').addClass('loadingIconReset');
    });

    d3.xml("systems.xml", "application/xml", function(xmldata) {
      planets = $("planet",xmldata);
      setHowMany(planets.length);
      updateCards(planets);
    });
    
    function setHowMany(planets) {
      $("#howMany").html(function() {
        return planets+" <br />";
      });
    }
  /* End Add Cards When Clicking Load More & Set Planets Counter On Slide 4*/

});

$(window).resize(function() {
  setReasonsHeight();
}); 
