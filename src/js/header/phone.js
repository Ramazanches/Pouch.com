/*switching phone information*/

import { toggleTransElement } from '../modules/functions.js';

const phoneBtn = document.querySelector('#telBtn'),
      phoneModal = document.querySelector('#telModal');

toggleTransElement(phoneBtn, phoneModal, 'hide', 'transRight', 'transRightBack'); 