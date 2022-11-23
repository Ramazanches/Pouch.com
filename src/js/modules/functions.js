/* Проверка поддержки webp, добавление класса webp или no-webp для html */
const $ = document.querySelector;

function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    }
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";    
  }

  testWebP(function (support) {
    if (support == true) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
    }
  });
}

function log(item) {
  if (item) console.log(item);
  else console.log('object = ' + item);
}

function findClosest() {
  !function(e) {
    "function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e) {
    for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e), n=0; o[n]&&o[n]!==t;)
    ++n;
    return Boolean(o[n])
  }),
    "function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;) {
      if (t.matches(e))return t;
      t=t.parentNode
    }
    return null
  })
  }(window.Element.prototype);
}


function hoverToggler(item, before, after, evType = 'mouseover') {
  if (item && before && after) f(item, before, after, evType);

  function f(item, b, a, evType) {
    item.addEventListener(evType, function() {
      if (!this.classList.contains(a)) this.classList.replace(b, a)
    })
  }
}

  
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

    findClosest();

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
        }
      })

      closeModal.forEach(function(i) {
        i.onclick = function(e) {
          let parentModal = this.closest(modal);
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

  function createElem(obj, el, className = '', id = '') {
    obj = document.createElement(el);
    obj.className = className;
  }

  function setAt(item, attr, value) {
    if (item) item.setAttribute(attr, value);
  }

  function setAtInValue(item, dataSet) {
    if (item) item.innerHTML =  item.getAttribute(dataSet);
  }

  function insertIcon(el, icon) {
    if (el && icon) f(el, icon);
    function f(el, icon) {
      const elems = document.querySelectorAll(el);
      for (let elem of elems) {
        elem.insertAdjacentHTML( 'beforeend', icon );   
      }
    }

  }

  export {
    toggleTransElement, 
    closeOpenedModal, 
    toggleElement, 
    toggleModal, 
    isWebp, 
    log, 
    insertIcon, 
    hoverToggler, 
    setAt, 
    setAtInValue,
    createElem,
    findClosest
  };
  



