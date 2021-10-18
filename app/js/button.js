let btnMenu = document.querySelector('.button');
btnMenu.onclick = () => {

	btnMenu.classList.toggle('button-open');
	let navResponse = document.getElementById("navbarresponsive");

	if ( navResponse.classList.contains('hidenav') && navResponse.classList.contains('none') ) {
		navResponse.classList.remove('none');
		navResponse.classList.replace('hidenav','shownav');
	}
	else {
		navResponse.classList.replace('shownav','hidenav');
		navResponse.classList.add('none');
	}
}
