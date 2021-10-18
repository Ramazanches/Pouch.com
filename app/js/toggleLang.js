/*language switching*/
const langBtn = document.querySelector('#langBtn');
const langModal = document.querySelector('#langModal');

langBtn.onclick = () => {
  if ( langModal.classList.contains('langhide') ) {
      langModal.classList.replace('langhide', 'lang');
  }
  else {
    langModal.classList.replace('lang', 'langhide');
  }
}