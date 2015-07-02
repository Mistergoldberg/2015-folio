// Panel Snap settings
$('body').panelSnap();

//Unslider settings
$(function() {
    $('.img-slider').unslider();
});

$(function() {
    $('.bg-slide').unslider();
});

$('.img-slider').unslider({
	speed: 300,               		//  The speed to animate each slide (in milliseconds)
	delay: 4000,              		//  The delay between slide animations (in milliseconds)
	complete: function() {},  		//  A function that gets called after every slide animation
	keys: true,               		//  Enable keyboard (left, right) arrow shortcuts
	dots: true,               		//  Display dot navigation
	fluid: false              		//  Support responsive design. May break non-responsive designs
});

$('.bg-slide').load(function() {
	$('.bg-slide').unslider({
		speed: 300,               		//  The speed to animate each slide (in milliseconds)
		delay: 4000,              		//  The delay between slide animations (in milliseconds)
		complete: function() {},  		//  A function that gets called after every slide animation
		keys: true,               		//  Enable keyboard (left, right) arrow shortcuts
		dots: true,               		//  Display dot navigation
		fluid: false              		//  Support responsive design. May break non-responsive designs
	});
});