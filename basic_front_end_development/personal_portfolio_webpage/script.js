$(document).ready(function() {
	$("li").on('click', function() {
		$("ul li").filter('.active').removeClass('active');
		$(this).addClass('active');
	});

});