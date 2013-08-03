jQuery(document).ready( function() {
	$(".sidemenu").click(function(){
		var pagename = $(this).attr("id");
		$("#subContensP").load("inc/" + pagename + ".inc");
	});
});



