import { toggleModal, findClosest, log } from '../modules/functions.js';
import { animateCSS } from '../modules/animateCSS.js';

document.addEventListener('DOMContentLoaded', function() {
	findClosest();
	toggleModal('.open-modal', '.modal__navbar', '.modal-close');

	const basketList = document.querySelector('#basketList');
	const basketArr = [
		{id: 0, bName: 'Brand Name 1', pName: 'Product Name 1', count: 1, maxCount: 10},
		{id: 1, bName: 'Brand Name 2', pName: 'Product Name 2', count: 3, maxCount: 10},
	];

	window.onload = () => {
		generateBasket();
		changeParametres('.basket__');
	}

	function generateBasket() {
		basketArr.forEach( item => {
			let basketItem = `
					<li id="basketItem" data-id="${item.id}" class="basket__item">
						<div class="basket__name">
							<a href="price-content.html" class="basket__product">${item.pName}</a>
							<p class="basket__brand">${item.bName}</p>
						</div>
						<div class="basket__amount">
							<button class="basket__btn" type="submit" formaction="">Buy</button>
							<span class="basket__plus" data-id="${item.id}" title="more">
								<i class="bi bi-plus-circle"></i>
							</span>
							<span class="basket__minus" data-id="${item.id}" title="less">
								<i class="bi bi-dash-circle"></i>
							</span>
							<span class="basket__out" title="amount">${item.count}</span>
							<div class="basket__delete">
								<i class="fa-solid fa-xmark basket__delete__icon"></i>
							</div>
						</div>
					</li>`;

			if (basketList) basketList.insertAdjacentHTML('beforeend', basketItem);
		});		
	}

function changeParametres(pref) {
	const amounts = document.querySelectorAll(pref + 'amount');
	if (amounts) changeQuantity(amounts, pref);
	itemDelete(pref);
}

function changeQuantity(items, pref) {
	items.forEach( i => {
		const out = i.querySelector(pref + 'out'),
					plus = i.querySelector(pref + 'plus'),
					minus = i.querySelector(pref + 'minus');

		if (out) eventIconQuantity(); 

		function eventIconQuantity() {
			plus.addEventListener('click', function() {
				let result = basketArr[this.dataset.id].count += 1;
				resultQuantity(result, this);
			});
			minus.addEventListener('click', function() {
				let result = basketArr[this.dataset.id].count -= 1;
				resultQuantity(result, this);
			});
		}

		function resultQuantity(result, t) {
			const max = basketArr[t.dataset.id].maxCount;
			const min = 0;
			if (result <= min) removeItem(t);
			else if (result >= max) result = max;
			out.innerHTML = result;
		}
	});
}	

function itemDelete(pref) {
	const delItems = document.querySelectorAll(pref + 'delete');
	delItems.forEach(i => { if (i) i.onclick = function() { removeItem(this) } });
}

function removeItem(t) {
	let itemId = t.closest('#basketItem');
	for (let i = 0; i < basketArr.lrngth; i++) {
		let basketItem = basketArr[i].id === itemId.dataset.id;
		basketArr.splice(basketItem, 1);
		log(basketItem)
	}
	// basketArr.splice(itemId.dataset.id, 1);
	itemId.style.display = 'none';
	log(t.closest('#basketItem'));
	log(basketArr);
}

/*	if (amounts) {
		amounts.forEach(amount => {
			const out = amount.querySelector('.basket__out');

			if (out) {
				for (let i = 0; i < basketList.length; i++) {
					basketList[i].addEventListener('click', function(event) {
						const e = event.target;
						if (e.className === 'basket__plus' && e.dataset.id === basketArr.id) {
							basketArr[basketList[i]].count += 1;
						}
						else if (e.className === 'basket__minus' && e.dataset.id === basketArr.id) {

						}
					})
				}*/
/*				minus.onclick = function() {
					if ( this.dataset.id === basketArr[0].id) {
						basketArr[0].count -= 1;		
					}
				}
				
				plus.onclick = function() {
					if ( this.dataset.id === basketArr[0].id) {
						basketArr[0].count += 1;		
					}
				}
			}			
		});
	}		
*/
	});