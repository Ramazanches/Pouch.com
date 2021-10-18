
/*switching mail information*/

const mailBtn = document.querySelector('#mailBtn');
const mailWindow = document.querySelector('.mail-container');

mailBtn.onclick = () => {
	if ( mailWindow.classList.contains('hide') ) {
		mailWindow.classList.remove('hide');
	}
	else {
		mailWindow.classList.add('hide');
	}
}

$(function(){
	var top = $('.brand').height();
	var height = $('.navbar-bottom').height();

	$('.mail-container').css('top', top);
	$('.mail-container').css('height', height);
});