	
	function toggleTransElement(item, modal, classOff, transStart, transEnd, evType = 'click') {
		item.addEventListener(evType, function (event) {
			if (modal.classList.contains(classOff)) {
				if (modal.classList.contains(transEnd)) {
					modal.classList.remove(transEnd);
				}
				modal.classList.remove(classOff);
				modal.classList.add(transStart);
			}
			else {			
				closeOpenedModal(modal, classOff, transStart, transEnd);
			}			
		});
	}

	function closeOpenedModal(modal, classOff, transStart, transEnd) {
		modal.classList.remove(transStart);
		modal.classList.add(transEnd);
		setTimeout(() => { modal.classList.add(classOff)}, 700);
	}




  function toggleElement(item, modal, evType = 'click', classOff = 'hide') {
  	if (item) {
			item.addEventListener(evType, function(event) { 
				elAddEvent(modal, classOff, evType, event, this); 
			}, true);
			item.addEventListener(evType, function(event) { 
				elAddEvent(modal, classOff, evType, event, this); 
			}, true);
  	}
  	else {
  		console.log('Cannot find ' + item);
  	}
  }

  function elAddEvent(modal, classOff, evType, event, curTarget) {
		if (evType === 'mouseover') {
			if (event.target == curTarget && modal.classList.contains(classOff)) {
				modal.classList.remove(classOff);
			}					
		}
		else if (evType === 'mouseleave' || evType === 'mouseout') {
			if (event.target == curTarget) {
				modal.classList.add(classOff);				
			}
		}
		else {
			modal.classList.toggle(classOff);
		}	
  }








	function toggleModal(item, modal, closer, classOff = 'hide', o = '#overlay') {

	!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

		let openModal = document.querySelectorAll(item),
		    overlay = document.querySelector(o),
		    closeModal = document.querySelectorAll(closer);
 
		if (openModal && overlay && closeModal) {

			openModal.forEach(function(i) {
			  i.onclick = function(e) {
			     e.preventDefault();
			     let modalId = this.getAttribute('data-modal'),
			         modalElem = document.querySelector(modal + '[data-modal="' + modalId + '"]');
			     if (modalElem) modalElem.classList.toggle(classOff);
			     overlay.classList.toggle(classOff);		     
			     // addAnimClass(modalElem, animClassOn);
			  }
			})

		  closeModal.forEach(function(i) {
		    i.onclick = function(e) {
		      let parentModal = this.closest(modal);
					// removeAnimClass(parentModal, animClassOn, animClassOff);
		      parentModal.classList.toggle(classOff);
		      overlay.classList.toggle(classOff);
		    }
		 	})	

			 document.body.addEventListener('keyup', function (e) {
			  let key = e.keyCode
		    if (key == 27) {
		      document.querySelector(modal + classOff).classList.toggle(classOff);
		      document.querySelector(o).classList.toggle(classOff);
		    }
			}, false);

			overlay.onclick = function() {
				const modalWindow = document.querySelector(modal);
				if(modalWindow) {
					if(!modalWindow.classList.contains(classOff)) {
						// removeAnimClass(modalElem, animClassOn, animClassOff);
				    modalWindow.classList.add(classOff); 
				    this.classList.add(classOff);					
					}
				}
			}				
		}


	
	}

/*	function addAnimClass(modalElem, animClassOn) {
		if (animClassOn) {
			if (!modalElem.classList.contains(animClassOn)) {
				modalElem.classList.add(animClassOn);				
			}
		}
	}

	function removeAnimClass(modalElem, animClassOn, animClassOff) {
		if (animClassOff && animClassOn) {
			if (modalElem.classList.contains(animClassOn)) {
				modalElem.classList.replace(animClassOn, animClassOff);					
			}
			else {
				modalElem.classList.add(animClassOff);	       	
			}       	
		}
	}*/

	export {toggleTransElement, closeOpenedModal, toggleElement, toggleModal};
  



