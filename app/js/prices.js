"use strict";

const gblock = document.querySelectorAll('.gallery-block');

/*heart icon*/

for (let i=0; i < gblock.length; i++) {
let heartIcon = gblock[i].querySelector('#heart');

heartIcon.onmouseover = () => {
	if (this.classList.contains('bi-heart')) {
		this.classList.remove('bi-heart');
		this.classList.add('bi-heart-fill');
	}
}

heartIcon.onmouseleave = () => {
	if (this.classList.contains('bi-heart-fill')) {
		this.classList.remove('bi-heart-fill');
		this.classList.add('bi-heart');
	}
}


let heartNum = gblock[i].querySelector('#heartnum');
let heartVal = heartNum.getAttribute('value');

heartNum.insertAdjacentHTML('beforeend', heartVal);

let prodName = gblock[i].querySelector('.good-name');
let brandName = gblock[i].querySelector('.good-brand');
let prodNameAttr = prodName.getAttribute('data-prodname');
let brandNameAttr = brandName.getAttribute('data-name');
prodName.insertAdjacentHTML("beforeend", prodNameAttr);
brandName.insertAdjacentHTML("beforeend", brandNameAttr);
}


function changeVal() {
	let from = document.querySelector('#from');
	let to = document.querySelector('#to');

	let rrng = document.querySelector('#rrng').value;
	let lrng = document.querySelector('#lrng').value;

	from.value = lrng;
	to.value = rrng;
}

function changeNum(){
	let from = document.querySelector('#from').value;
	let to = document.querySelector('#to').value;

	let rrng = document.querySelector('#rrng');
	let lrng = document.querySelector('#lrng');

	rrng.value = to;
	lrng.value = from;

} //changenum





/*Products*/

for (let i = 0; i < gblock.length; i++) {

		let plast = gblock[i].querySelector('.price-last');
		let pnow = gblock[i].querySelector('.price-now');

		let plastAt = gblock[i].getAttribute('data-oldprice');
		let pnowAt = gblock[i].getAttribute('data-price');

		let plastcur = plast.querySelector('#cur');
		let pnowcur = pnow.querySelector('#cur');
		let rub = '<i class="fa fa-ruble-sign"></i>';
		plastcur.insertAdjacentHTML("beforeEnd", rub);
		pnowcur.insertAdjacentHTML("beforeEnd", rub);

		plast.insertAdjacentHTML("afterBegin", plastAt);
		pnow.insertAdjacentHTML("afterBegin", pnowAt);

/*calculation of the discount*/

		let inequality = plastAt - pnowAt;
		let inqdivide = inequality / plastAt;
		let resultMulti = inqdivide * 100;
		let result = parseInt(resultMulti);

		let disCount = gblock[i].querySelector('#disCount');
    gblock[i].setAttribute('data-discount', result);
		disCount.insertAdjacentHTML("beforeend", result + "%");

}


/*number of stars depending on the rating*/

for (let i = 0; i < gblock.length; i++) {

		let rating = gblock[i].querySelector('.rating');
		let ratingAt = gblock[i].getAttribute('data-rating');
		let fis = '<i class="bi bi-star-fill"></i>';
		let is = '<i class="bi bi-star"></i>';

		switch(ratingAt){
			case '1':
			rating.insertAdjacentHTML('beforeEnd', fis + is + is + is + is);
			break;
			case '2':
			rating.insertAdjacentHTML('beforeEnd', fis + fis + is + is + is);
			break;
			case '3':
			rating.insertAdjacentHTML('beforeEnd', fis + fis + fis + is + is);
			break;
			case '4':
			rating.insertAdjacentHTML('beforeEnd', fis + fis + fis + fis + is);
			break;
			case '5':
			rating.insertAdjacentHTML('beforeEnd', fis + fis + fis + fis + fis);
			break;
		}

		if(ratingAt >= 6){
			rating.insertAdjacentHTML('beforeEnd', fis + fis + fis + fis + fis);
		}
		else if(ratingAt <= 0){
			rating.insertAdjacentHTML('beforeEnd', is + is + is + is + is);
		}
}


/*Sort by price reduction/increase, rating, discount */


/*document.querySelector("#sortAsc").onclick = () => {
	sortList("data-price");
};
document.querySelector("#sortDesc").onclick = () => {
	sortListDesc("data-price");
};
document.querySelector("#sortRating").onclick = () => {
	sortListDesc("data-rating");
};
document.querySelector("#sortDiscount").onclick = () => {
	sortListDesc("data-discount");
};

	function sortList(sortType) {
    let sortwrapper = document.querySelector('.gallery-wrap');
    for (let i = 0; i < sortwrapper.children.length - 1; i++) {
        for (let j = i; j < sortwrapper.children.length; j++) {
            if (+sortwrapper.children[i].getAttribute(sortType) > +sortwrapper.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = sortwrapper.replaceChild(sortwrapper.children[j], sortwrapper.children[i]);
                insertAfter(replacedNode, sortwrapper.children[i]);
            }
        }
    }
}

function sortListDesc(sortType) {
    let sortwrapper = document.querySelector('.gallery-wrap');
    for (let i = 0; i < sortwrapper.children.length - 1; i++) {
        for (let j = i; j < sortwrapper.children.length; j++) {
            if (+sortwrapper.children[i].getAttribute(sortType) < +sortwrapper.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = sortwrapper.replaceChild(sortwrapper.children[j], sortwrapper.children[i]);
                insertAfter(replacedNode, sortwrapper.children[i]);
            }
        }
    }
}


function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
*/



