	const navbar = document.querySelector('.navbar');
	const navbarNav = document.querySelector('.navbar__nav');
	const navbarMenu = document.querySelector('.navbar__menu');
	
	export let topHeaderHeight = parseFloat(getComputedStyle(navbar).height);	
	export let topHeight = parseFloat(getComputedStyle(navbarNav).height);	
	export let navHeight = parseFloat(getComputedStyle(navbarMenu).height);
