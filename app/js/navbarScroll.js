$(function(){
		let navHeight = $('nav').height();
		$('.slider').css('marginTop', navHeight);
})
	$(window).scroll( () => {
		let windowTop = $(window).scrollTop();
		windowTop > 90 ? $('.navbar-bottom').addClass('hide') : $('.navbar-bottom').removeClass('hide');
		windowTop > 90 ? $('header').css('position', 'fixed') : $('header').css('position', 'relative');
		windowTop > 90 ? $('header').css('paddingTop', '0') : $('header').css('paddingTop', '1vw');
		windowTop > 90 ? $('.cityName').css('top', '0') : $('.cityName').css('top', '-4px');
		windowTop >= 200 ? $('#video').fadeIn(1000) : $('#video').fadeOut(1000);
		windowTop >= 200 ? $('.video-wrapper').show() : $('.video-wrapper').hide();

		if(windowTop > 90){
			$('header').css('top', '0');
		}

	});

