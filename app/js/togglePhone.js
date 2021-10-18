/*switching phone information*/

const phoneBtn = document.querySelector('#phone');
const phoneModal = document.querySelector('#phoneModal');
phoneBtn.onclick = () => {
  if ( phoneModal.classList.contains('phonehide') ) {
      phoneModal.classList.replace('phonehide', 'phonevisible');
  }
  else {
    phoneModal.classList.replace('phonevisible', 'phonehide');
  }
}