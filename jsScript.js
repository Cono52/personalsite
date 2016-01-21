console.log("test log");

$(document).ready(function(){

	$(".headCon").one("mouseover", function() {
	  $(".headCon").addClass('permahover');

	});

	$(".headCon").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
		function(){ 
		$(".intro").fadeOut("slow", function(){
			$(this).remove();
			$(".profile").fadeIn("slow");
			console.log("done"); 
			console.log( $('.background-blackout').length );
		});
	});
});