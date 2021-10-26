"use strict";

const modal = document.getElementById("modalWindow");
const btn = document.getElementById("modalButton");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => {
  modal.style.display = "block";
}
span.onclick = () => {
  modal.style.display ="none";
}
window.onclick = (event) => {
  if (event.target != modal) {
  	modal.style.display = "none";
  }
}

let basketList = document.querySelector('#basketList');
let basketChildLength = basketList.children.length;
let modalBtn = document.querySelector('#modalButton');
let modalBtnFchild = modalBtn.firstElementChild;
modalBtnFchild.firstElementChild.innerHTML = basketChildLength;


let amount = document.querySelectorAll('.amount');
	for (let i = 0; i < amount.length; i++) {
		let minus = amount[i].querySelector('.minus');
		let plus = amount[i].querySelector('.plus');
		let out = amount[i].querySelector('.out');
		let count = 1;
		out.innerHTML = count;

		minus.onclick = () => {
			if(count - 1  == 0){
				minus.parentElement.parentElement.classList.add('hide');
			}
			count = count - 1;
			out.innerHTML = count;
		}
		plus.onclick = () => {
			count = count + 1;
			out.innerHTML = count;
		}
	}