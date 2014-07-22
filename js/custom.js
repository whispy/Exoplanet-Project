$(document).ready(function () {

	var $root = $('html, body');
	$('a').click(function() {
	    var href = $.attr(this, 'href');
	    var offsetPlus = $(href).offset().top + 1 + 'px';
	    console.log(offsetPlus);
	    $root.animate({
	        scrollTop: offsetPlus
	    }, 500, function () {
	      
	    });
	    return false;
	});

});