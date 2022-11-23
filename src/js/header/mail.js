import {topHeight, navHeight} from './modules/computedStyles.js';

/*switching mail information*/

const mailBtn = document.querySelector('#mailBtn');
const mailWindow = document.querySelector('.navbar__mail');

mailBtn.onclick = () => {
	if ( mailWindow.classList.contains('hide') ) {
		mailWindow.classList.remove('hide');
	}
	else {
		mailWindow.classList.add('hide');
	}
}

const navbarMail = document.querySelector('.navbar__mail');
navbarMail.style.top = `${topHeight}px`;
navbarMail.style.height = `${navHeight}px`;