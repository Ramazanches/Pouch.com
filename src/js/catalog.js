import { log, setAt, insertIcon, hoverToggler, setAtInValue, createElem } from './modules/functions.js';
  import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', function() {

"use strict";

	// DB

	const arrGalleryItems = [
		{
			id: 0,
			currentPrice: 80,
			oldPrice: 100,
			dataRating: 2,
			path: 'img/catalog/',
			img: 1,
			format: 'jpg',
			brand: 'Brand Name 1',
			product: 'Product Name 1',
			alt: 'text1',
			likes: 5
		},

		{
			id: 1,
			currentPrice: 98,
			oldPrice: 132,
			dataRating: 5,
			path: 'img/catalog/',
			img: 2,
			format: 'jpg',
			brand: 'Brand Name 2',
			product: 'Product Name 2',
			alt: 'text2',
			likes: 0
		},

		{
			id: 2,
			currentPrice: 34,
			oldPrice: 154,
			dataRating: 3,
			path: 'img/catalog/',
			img: 3,
			format: 'jpg',
			brand: 'Brand Name 3',
			product: 'Product Name 3',
			alt: 'text3',
			likes: 0
		},

		{
			id: 3,
			currentPrice: 77,
			oldPrice: 188,
			dataRating: 4,
			path: 'img/catalog/',
			img: 4,
			format: 'jpg',
			brand: 'Brand Name 4',
			product: 'Product Name 4',
			alt: 'text4',
			likes: 0
		},

		{
			id: 4,
			currentPrice: 46,
			oldPrice: 120,
			dataRating: 1,
			path: 'img/catalog/',
			img: 5,
			format: 'jpg',
			brand: 'Brand Name 5',
			product: 'Product Name 5',
			alt: 'text5',
			likes: 0
		},

	];

	arrGalleryItems.forEach( i => {
		let galleryContent = `
			<div class="gallery__item__link" id="priceContent">
				<img class="gallery__item__img" src="${i.path + i.img}.${i.format}"  alt="${i.alt}">
			</div>
			<div class="gallery__content">
				<div class="gallery__price">
					<div class="price__current">
						<sub class="price__current__text" id="rub">${i.currentPrice}</sub>
					</div>
					<del class="price__last">
						<span class="price__last__text" id="rub">${i.oldPrice}</span>
					</del>
					<div class="gallery__discount">
						<i class="gallery__discount__icon fa fa-tags"></i>
						<span class="prices__discount__text" id="disCount"></span>
					</div>
				</div>
				<div class="gallery__good">
					<div class="gallery__brand" data-name="${i.brand}"></div>
					<div class="gallery__name" data-name="${i.product}"></div>
					<div class="gallery__rating" id="rating">
				</div>
			</div>
			<div class="gallery__likes">
				<input class="likes__inp" data-id="${i.id}" id="addCart" type="submit" value="Add to Cart">
				<i class="likes__icon bi bi-heart" id="likeIcon">
					<span class="likes__span" id="likes">${i.likes}</span>
				</i>
			</div>`;

		const galleryItem = document.createElement('div');
		const gList = document.querySelector('.gallery__list');
		galleryItem.className = 'gallery__item';
		setAt(galleryItem, 'data-discount', '');
		setAt(galleryItem, 'data-rating', i.dataRating);
		setAt(galleryItem, 'data-price', i.currentPrice);
		galleryItem.insertAdjacentHTML('beforeend', galleryContent);
		if (gList) gList.append(galleryItem);
	});

	insertIcon('#rub', '<i class="fa fa-ruble-sign"></i>');

	let singleMainContent = `
	  <section class="single__content content__single">
	    <h2 class="content__title h2">ErichKrause / Zip tote bag ErichKrause 14L Python Print</h2>
	    <p class="content__price price__content">
	      <span class="price__now p3" data-price="643">
	        <b>643 ₽</b>
	      </span>
	      <span class="price__old" data-oldprice="1022">
	        <sup class="price__sub">
	          <del>1 022 ₽</del>
	        </sup>
	      </span>
	    </p>
	    <p class="content__color p3">color:
	      <span class="content__color__span">brown</span>
	    </p>
	    <div class="content__add-cart add-cart">
	      <input type="submit" id="addCart" name="addtocart" value="Add to Cart" class="add-cart__inp">
	      <i class="add-cart__icon bi bi-heart" id="heartIcon">
	        <span class="add-cart__icon__num" id="heartNum" value="0"></span>
	      </i>
	    </div>
	    <p class="content__delivery delivery__content">
	      <span class="delivery__text p3">Delivery:</span>
	      <span class="delivery__time p4">approximately February 19 (from warehouse)</span>
	    </p>
	    <ul class="content__list list">
	      <li class="list__item item__list">
	        <i class="item__icon bi bi-box"></i>
	        <span class="item__text p3">Free shipping</span>
	      </li>
	      <li class="list__item item__list">
	        <i class="item__icon bi bi-bookmark"></i>
	        <span class="item__text p3">Fitting</span>
	      </li>
	      <li class="list__item item__list">
	        <i class="item__icon bi bi-arrow-clockwise"></i>
	        <span class="item__text p3">21 days for return</span>
	      </li>
	    </ul>
	    <p class="content__seller">
	      <span class="content__text"></span>
	      <span class="content__text"></span>
	      <i class="content__icon"></i>
	    </p>
	  </section>`;

	const mainCatalog = document.querySelector('.catalog'),
				galleryItems = document.querySelectorAll('.gallery__item');

	let mainSingle, 
			sliderSection, 
			slider,
			slideWrap, 
			slideItem, 
			sliderImg;

	const singleSwiper = [
		{ id: 0, img: 1, format: 'jpg', alt: '', desc: 'From off a hill whose concave womb reworded' },
		{ id: 1, img: 2, format: 'jpg', alt: '', desc: 'My spirits to attend this double voice accorded' },
		{ id: 2, img: 3, format: 'jpg', alt: '', desc: 'Tearing of papers, breaking rings a-twain' },
		{ id: 3, img: 4, format: 'jpg', alt: '', desc: 'A plaintful story from a sistering vale' },
		{ id: 4, img: 5, format: 'jpg', alt: '', desc: 'And down I laid to list the sad-tuned tale' },
		{ id: 5, img: 6, format: 'jpg', alt: '', desc: 'Ere long espied a fickle maid full pale' },
	];

	singleSwiper.forEach( i => {
		createElem(slideWrap, 'div', 'slider__wrapper swiper-wrapper');
		createElem(slideItem, 'div', 'slider__slide swiper-slide');
		createElem(sliderImg, 'img', 'slider__img');
		setAt(sliderImg, 'src', 'img/catalog/single/product_1/' + i.img + '.' + i.format);
		setAt(sliderImg, 'data-description', i.desc);
		setAt(sliderImg, 'alt', i.desc);
		if (slideItem && slideWrap && sliderImg) {
			slideItem.append(sliderImg);
			slideWrap.append(slideItem);			
		}

	});

	createElem(mainSingle, 'main', 'single');
	createElem(sliderSection, 'section', 'single__slider slider__single');
	createElem(slider, 'div', 'slider__swiper swiper', 'swiperPriceSingle');

	if (slider && slideWrap && sliderSection && mainSingle ) {
		slider.append(slideWrap);
		sliderSection.append(slider);
		mainSingle.append(sliderSection);		
	}

	galleryItems.forEach(gItem => {
		const rating = gItem.querySelector('#rating');
		const ratingAt = gItem.getAttribute('data-rating');
		const likeIcon = gItem.querySelector('#likeIcon'),
					likes = gItem.querySelector('#likes'),
					prodName = gItem.querySelector('.gallery__name'),
					brandName = gItem.querySelector('.gallery__brand'),
					dataPrice = gItem.querySelector('.price__current__text').textContent,
					dataOldPrice = gItem.querySelector('.price__last__text').textContent,
					disCount = gItem.querySelector('#disCount'),
					computedDiscount = parseInt(((dataOldPrice - dataPrice) / dataOldPrice) * 100);

		hoverToggler(likeIcon, 'bi-heart', 'bi-heart-fill');
		hoverToggler(likeIcon, 'bi-heart-fill', 'bi-heart', 'mouseleave');

		setAtInValue(prodName, 'data-name');
		setAtInValue(brandName, 'data-name');
		setAtInValue(likes, 'value');

		addLike(likeIcon, likes)

		gItem.dataset.discount = computedDiscount;
		disCount.innerHTML = computedDiscount + "%";	

		/*if (gItem && mainCatalog) openSingleItem(gItem, mainCatalog, mainSingle);*/

		const singleContent = `<section class="single__slider slider__single">
      <div class="slider__swiper swiper" id="swiperPriceSingle">
        <div class="slider__wrapper swiper-wrapper">
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="images1_1.jpg" 
            alt="" 
            data-description="From off a hill whose concave womb reworded" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="images1_1.jpg" 
            alt="" 
            data-description="A plaintful story from a sistering vale" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="images1_1.jpg" 
            alt="" 
            data-description="A plaintful story from a sistering vale" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="images1_1.jpg" 
            alt="" 
            data-description="My spirits to attend this double voice accorded" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="images1_1.jpg" 
            alt="" 
            data-description="And down I laid to list the sad-tuned tale" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="images1_1.jpg" 
            alt="" 
            data-description="Ere long espied a fickle maid full pale" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="images1_1.jpg" 
            alt="" 
            data-description="Tearing of papers, breaking rings a-twain" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="images1_1.jpg" 
            alt="" 
            data-description="Storming her world with sorrow's wind and rain" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="images1_1.jpg" 
            alt="" 
            data-description="Upon her head a platted hive of straw" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="img/catalog/single/product_1/1_1.jpg" 
            alt="" 
            data-description="Which fortified her visage from the sun" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="img/catalog/single/product_1/1_1.jpg" 
            alt="" 
            data-description="Some beauty peep'd through lattice of sear'd age" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="img/catalog/single/product_1/1_1.jpg" 
            alt="" 
            data-description="Oft did she heave her napkin to her eyne" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="img/catalog/single/product_1/1_1.jpg" 
            alt="" 
            data-description="Which on it had conceited characters" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="img/catalog/single/product_1/1_1.jpg" 
            alt="" 
            data-description="Laundering the silken figures in the brine" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="img/catalog/single/product_1/1_1.jpg" 
            alt="" 
            data-description="That season'd woe had pelleted in tears" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="img/catalog/single/product_1/1_1.jpg" 
            alt="" 
            data-description="And often reading what contents it bears" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="img/catalog/single/product_1/1_1.jpg" 
            alt="" 
            data-description="In clamours of all size, both high and low" />
          </div>
          <div class="slider__slide swiper-slide">
            <img 
            class="slider__img"
            src="img/catalog/single/product_1/1_1.jpg" 
            alt="" 
            data-description="Sometimes her levell'd eyes their carriage ride" />
          </div>
        </div>
      </div>
    </section>`;

		gItem.addEventListener('click', function(e) {
			if (e.target.className = 'gallery__item__img') {
				if (mainCatalog.classList.contains('catalog')) {
					mainCatalog.querySelector('.catalog__sidebar').style = 'display:none';
					mainCatalog.querySelector('.catalog__section').style = 'display:none';
					mainCatalog.querySelector('.catalog__section__gallery').style = 'display:none';
					mainCatalog.classList.replace('catalog', 'single');					
					mainCatalog.insertAdjacentHTML('beforeend', singleContent);
				}
			}
		})

  const swiper_single = new Swiper("#swiperPriceSingle", {
	  slidesPerView: 2,
	  spaceBetween: 0,
	  loop: true,
	  pagination: {
	    el: ".swiper-pagination",
	    clickable: true,
	  },
	  navigation: {
	    nextEl: ".swiper-button-next",
	    prevEl: ".swiper-button-prev",
	  },
	});

		/*number of stars depending on the rating*/
		createRatingIndicator(ratingAt, rating, 'bi bi-star-fill', 'bi bi-star');
		});

	function createRatingIndicator(value, container, fClass, eClass) {	
		for (let i = 0; i < value; i++) {
			let fillIcon = document.createElement('i');
			fillIcon.className = fClass;
			container.append(fillIcon);
		}	
		for (let j = container.children.length; j < 5; j++) {
			let blankIcon = document.createElement('i');
			blankIcon.className = eClass;
			container.append(blankIcon);
		}
	}

/*	function openSingleItem(obj, wrap, newWrap) {
		obj.addEventListener('click', function (event) {
			if (event.target.className === 'gallery__item__img') {
				wrap.style.display = "none";
				document.body.append(newWrap);
			}	
		})
	}	*/

	function addLike(item, container) {
		let count = 0;
		if ( item && container) {
			container.innerHTML = count;
			container.classList.add('_likes__span');	
			item.addEventListener('click', function() {
				count += 1;
				container.classList.remove('_likes__span');
				container.innerHTML = count;
				item.classList.add('bi-heart-fill')	
			})			
		} 
	}



	let sortwrapper = document.querySelector('.gallery__list');
	sortAsc("#sortAsc", "data-price");
	sortDesc("#sortDesc", "data-price");
	sortDesc("#sortRating", "data-rating");
	sortDesc("#sortDiscount", "data-discount");

	function sortAsc(selector, attr, evType = 'click') {
		if (document.querySelector(selector)) {
			document.querySelector(selector).addEventListener(evType, function() {
				sortListAsc(attr);
			});
		}
	}
	function sortListAsc(sortType) {
    for (let i = 0; i < sortwrapper.children.length - 1; i++) {
      for (let j = i; j < sortwrapper.children.length; j++) {
        if (+sortwrapper.children[i].getAttribute(sortType) > +sortwrapper.children[j].getAttribute(sortType)) {
          let replacedNode = sortwrapper.replaceChild(sortwrapper.children[j], sortwrapper.children[i]);
          insertAfter(replacedNode, sortwrapper.children[i]);
        }
      }
    }	
	}

	function sortDesc(selector, attr, evType = 'click') {
		if (document.querySelector(selector)) {
			document.querySelector(selector).addEventListener(evType, function() {
				sortListDesc(attr);
			});
		}
	}

	function sortListDesc(sortType) {
    for (let i = 0; i < sortwrapper.children.length - 1; i++) {
      for (let j = i; j < sortwrapper.children.length; j++) {
        if (+sortwrapper.children[i].getAttribute(sortType) < +sortwrapper.children[j].getAttribute(sortType)) {
          let replacedNode = sortwrapper.replaceChild(sortwrapper.children[j], sortwrapper.children[i]);
          insertAfter(replacedNode, sortwrapper.children[i]);
        }
      }
    }
	}

	function insertAfter(elem, refElem) {
	    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
	}

});	

/*	

	changeInput();

	function changeInput() {
		let	from = document.querySelector('#from'),
			to = document.querySelector('#to'),
			rrng = document.querySelector('#rrng'),
			lrng = document.querySelector('#lrng');

		function changeVal (from, to, rrng, lrng) {
			if (from, to, rrng, lrng) {
				from.value = lrng;
				to.value = rrng;				
			}

		}

		function changeNum (from, to, rrng, lrng) {
			if (from, to, rrng, lrng) {
				rrng.value = to;
				lrng.value = from;				
			}

		}	

		onInput(from, changeNum)
		onInput(to, changeNum)
		onInput(rrng, changeVal)
		onInput(lrng, changeVal)

		function onInput(item, f) {
			if (item && f) item.oninput = () => { f }
		}
	}


		const fis = '<i class="bi bi-star-fill"></i>';
		const is = '<i class="bi bi-star"></i>';

		switch (ratingAt) {
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

		if (ratingAt >= 6) {
			rating.insertAdjacentHTML('beforeEnd', fis + fis + fis + fis + fis);
		}
		else if (ratingAt <= 0) {
			rating.insertAdjacentHTML('beforeEnd', is + is + is + is + is);
		}*/