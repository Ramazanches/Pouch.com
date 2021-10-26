
/*switching locations*/
const locBtn = document.querySelector('#locBtn');
const locModal = document.querySelector('#locModal');

locBtn.onclick = () => {
  if ( locModal.classList.contains('lochide') ) {
      locModal.classList.replace('lochide', 'locvisible');
  }
  else {
    locModal.classList.replace('locvisible', 'lochide');
  }
}

function changeTown() {
	const sel = document.querySelector('#location').selectedIndex;
	const opt = document.querySelector('#location').options;
	const city = document.querySelector('.cityName');
	alert('Выбран город ' + opt[sel].text);
	locModal.classList.replace('locvisible', 'lochide');
	locBtn.title = opt[sel].text;
	city.innerHTML = opt[sel].text;

}

