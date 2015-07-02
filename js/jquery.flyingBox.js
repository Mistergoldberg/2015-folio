// description animation	
	 $(".description-link").click(function(){
	    $(".description").slideToggle("slow");
	      return false;
	  }); 
	
 	 $("#small-nav-button").click(function(){
 	    $("#main-nav").slideToggle("slow");
 	      return false;
 	  }); 
	  
  	 $("#main-nav").click(function(){
		 if ($( window ).width() <= 760){
  	    $("#main-nav").slideUp("fast");
  	      return false;
		}
  	  }); 

	  $(window).scroll(function(){
		if ( $(".description").is( ":visible" ) ) {
	      $(".description").slideUp("fast");
	      return false;
	    }
 		if ( $("#main-nav").is( ":visible" ) ) {
			if ($( window ).width() <= 760){
 	      $("#main-nav").slideUp("fast");
 	      return false;
 	    }}
	  });	
	  
	  // $( window ).resize(function() {
	  // if ($( window ).width() >= 760){
	  // 		  if $("#main-nav").is( ": none" ){
	  // 		  $("#main-nav").css({"display":"visible"});
	  // }}
	  // });