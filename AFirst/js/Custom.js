    
$(window).scroll(function() {
	if ($(this).scrollTop()>50) {
		$(".navbar-default").addClass("red")

	}
	else
	{
		$(".navbar-default").removeClass("red")
	}
})