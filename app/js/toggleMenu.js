

let dropdown = document.getElementById('dropdown');
let menu = document.getElementById('dropdownMenu');

dropdown.onmouseover = (event) => {
  let target = event.target;
  if ( target.className == 'dropdown_item' ) {
    menu.style.display = "block";
  }
}

window.onclick = (event) => {
  let target = event.target;
  if ( target != menu ) {
    menu.style.display = "none";
  }
}

menu.onmouseleave = (event) => {
  let target = event.target;
  if ( target.className == "dropdownmenu" ) {
    menu.style.display = "none";
  }
}

//Mobile version

let mobileDropdown = document.getElementById('dropdownMobile');
let mobileDropMenu = document.getElementById('dropdownMenuMobile');

mobileDropdown.onmouseover = (event) => {
  let target = event.target;
  if( target.className == 'dropdown_item' ) {
    mobileDropMenu.style.display = "block";
  }
}



window.onclick = (event) => {
  let target = event.target;
  if ( target != mobileDropMenu ) {
    mobileDropMenu.style.display = "none";
  }
}

mobileDropMenu.onmouseleave = (event) => {
  let target = event.target;
  if ( target.className == "dropdownmenumobile" ) {
    mobileDropMenu.style.display = "none";
  }
}

$(function() {
  let sub = $('.dropdownmenumobile')
  let header = $('header').height();
  $('.mobile-nav').css('top', header);
});
