$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	resetBodyHeight();
});

$(window).on('resize', function(event) {
	// event.preventDefault();
	resetBodyHeight();
});

function resetBodyHeight() {
	var wh = $(window).height();
	if ( wh > 840 ) {
		$("body").css("height","100%");
	} else {
		$("body").css("height","auto");
	}
}