import {topHeight, navHeight} from './modules/computedStyles.js';

/*appearance and disappearance of the search icon*/

const search = document.querySelector('#search');
const searchModal = document.querySelector('.navbar__search');

search.onclick = () => {
	if (searchModal.classList.contains('hide')) {
		searchModal.classList.remove('hide');
	}
	else {
		searchModal.classList.add('hide');
	}
}

searchModal.style.top = `${topHeight}px`;
searchModal.style.height = `${navHeight}px`;


