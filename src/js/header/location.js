import { toggleTransElement, log } from '../modules/functions.js';
import { selectMod, selectOptionsGenerate } from './modules/select.js';

document.addEventListener('DOMContentLoaded', () => {

	const locBtn = document.querySelector('#localBtn'),
				locBtnTitle = locBtn.querySelector('.navbar__small'),
				locModal = document.querySelector('#localModal'),
				selectModal = document.querySelector('#locSelect'),
				newSel = document.querySelector('.new-select');

	const locSelArr = [
		'Moscow',
		'St. Petersburg',
		'Rostov-on-Don',
		'Nizhny Novgorod',
		'Volgograd',
		'Permian',
		'Kazan',
		'Ekaterinburg',
		'Chelyabinsk',
		'Ufa',
		'Omsk',
		'Tyumen',
  ];				
	selectOptionsGenerate(locSelArr, selectModal, 'location__option p1');
	selectMod('#locSelect');

	const sel = locModal.querySelector('.select'),
				selList = sel.querySelector('.new-select__list'),
				selItems = sel.querySelectorAll('.new-select__item');

	selectOption();
	toggleTransElement(locBtn, locModal, 'hide', 'transRight', 'transRightBack');

	function selectOption() {
		selItems.forEach(item => {
			item.onclick = function() {
				alert('Выбран город ' + this.textContent);
				locBtnTitle.innerHTML = this.textContent;
				closeOpenedModal();
			}
		});	
	}


});


