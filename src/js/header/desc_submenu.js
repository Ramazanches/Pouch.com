import {log, toggleElement} from '../modules/functions.js';
import {topHeaderHeight} from './modules/computedStyles.js';

const subToggler = document.querySelector('#dropdownToggler');
const subMenu = document.querySelector('#dropdownMenu');
let dropDownWidth = parseFloat(getComputedStyle(subToggler).width);

subMenu.style.top = `${topHeaderHeight}px`;
subMenu.style.width = `${dropDownWidth}px`;

toggleElement(subToggler, subMenu, 'mouseover');
toggleElement(subToggler, subMenu, 'mouseleave');


