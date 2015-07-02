	//project transitions
	//left
	$(".trans-left").click(function(e) {
	    e.preventDefault();
		 var clickedLink = $(this).attr('href');
		 $("#trans-slider").css({"left":"-100%","opacity":"1"});
	    $("#trans-slider").animate({"left":'0%'}, 300, 
		 	function(){document.location.href = clickedLink;
	    });
	});
	
	//right
	$(".trans-right").click(function(e) {
	    e.preventDefault();
		 var clickedLink = $(this).attr('href');
		 $("#trans-slider").css({"left":"100%","opacity":"1"});
	    $("#trans-slider").animate({"left":'0%'}, 300,
		 	function(){document.location.href = clickedLink;
	    });
	});
	
	
	$(window).on('unload', function(){
		$("#trans-slider").animate({"opacity":'0'}, 300);
	});
	
	$(document).ready( function(){
		$("#garage-door").css({"opacity":'1'});
		$("#garage-door").animate({"height":'0%'}, 300);
	});
		  