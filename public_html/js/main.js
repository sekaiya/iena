jQuery(document).ready( function() {

	$("#sidemenus > *").click(function(){
		$("#sidemenus").animate({
			marginLeft: "-270px"
		}, 500 );
		
		var pagename = $(this).attr("id");
		$("#subContensP").load("inc/" + pagename + ".inc");
	});
	
	$(".notice").hover(function(){
		$("#kotowari").toggle();
	});

});
s

