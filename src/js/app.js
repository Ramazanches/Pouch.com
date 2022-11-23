import * as f from "./modules/functions.js";
import fontAwesome from "../libs/icons/fa_6_pro/all.min.js";
import { animateCSS } from "./modules/animateCSS.js";

f.isWebp();

function exec (f) {
  let wait = 0;
  let queue= [];  
  if (wait)  queue.push (f);
  else try { 
    f () 
  } 
  catch (e) { 
    err (e) 
  }
} 

exec( () => {

function fillAlt() {
	const images = document.querySelectorAll('img');
	images.forEach(img => {
		if (img.alt === "") {
			img.alt = "Loading image";
		}
	});
}

});

  /*constant in mobile browser*/
exec( () => {
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', appHeight);
  appHeight(); 	
});

