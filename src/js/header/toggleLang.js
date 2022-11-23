/*language switching*/
const langBtn = document.querySelector('#langBtn');
const langModal = document.querySelector('#langModal');

langBtn.onclick = () => {
  if ( langModal.classList.contains('hide') ) {
      langModal.classList.replace('hide', 'show');
  }
  else {
    langModal.classList.replace('show', 'hide');
  }
}