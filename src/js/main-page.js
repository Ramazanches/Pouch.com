
// import Swiper, { Navigation, Pagination } from "swiper";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

  import Swiper from 'swiper/bundle';

  const swiper_1 = new Swiper("#mainSection-3", {
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

  const swiper_2 = new Swiper("#mainSection-6", {
	  slidesPerView: 2,
	  spaceBetween: 5,
	  speed: 1000,
	  rewind: true,
  	keyboard: true,
  	centeredSlides: true,
  	autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	  pagination: {
	    el: ".swiper-pagination",
	    clickable: true,
	  },
	  navigation: {
	    nextEl: ".swiper-button-next",
	    prevEl: ".swiper-button-prev",
	  },
});
