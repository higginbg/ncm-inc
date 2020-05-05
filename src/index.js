// Imports
import './css/main.css';

import lozad from 'lozad';

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'lightgallery.js/dist/js/lightgallery.min.js';
import 'lg-zoom.js/dist/lg-zoom.min.js';

import navShrink from './js/modules/NavShrink';
import navHighlight from './js/modules/NavHighlight';
import menuClose from './js/modules/MenuClose';

import { validateFile, validate, handleForm } from './js/handlers/HandleForm';
import { handleTouchStart, handleTouchMove } from './js/handlers/HandleTouch';
import { nav, drpdwn, drpdwnBtn, form, requiredInputs, resume, isRoot, menuOpenIcon, menuCloseIcon, navSmall } from './js/variables';


/* Initiations */

// lozad
const lozadEl = document.querySelectorAll('.lozad');
if (lozadEl.length > 0) {
  const observer = lozad(lozadEl); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  const lozadTrig = document.querySelector('.lozad-trigger');
  observer.triggerLoad(lozadTrig);
}

// AOS
AOS.init({
  startEvent: 'load',
  duration: 1000,
  once: true,
  easing: 'ease'
});

// lightgallery.js
lightGallery(document.getElementById('lightgallery'), {
  subHtmlSelectorRelative: true,
  scale: .5,
  actualSize: false,
  download: false,
  selector: '.item'
});


/* Event listeners */

// window

window.addEventListener('load', () => {
  document.body.classList.remove('preload');
  AOS.refresh();
  navHighlight(drpdwn, isRoot);
});

window.addEventListener('resize', menuClose);

window.addEventListener('scroll', navShrink);

window.addEventListener('click', ({ target }) => {

  // close menu on click
  const tag = target.tagName.toLowerCase();
  if (drpdwn.classList.contains(navSmall) && !target.closest('nav')) {
    menuClose();
  }

  // Add padding for nav when input is clicked
  const height = (tag === 'input' || tag === 'textarea') ? nav.clientHeight : (-nav.clientHeight);
  document.body.paddingTop = `${document.body.paddingTop + height}px`;
});

// document
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

// others
nav.addEventListener('click', e => e.stopPropagation());

drpdwnBtn.addEventListener('click', () => {
  drpdwn.classList.toggle(navSmall);
  drpdwnBtn.innerHTML = drpdwn.classList.contains(navSmall) ? menuCloseIcon : menuOpenIcon;
});

form && form.addEventListener('submit', e => handleForm(e));

if (requiredInputs) {
  for (const input of requiredInputs) {
    input.addEventListener('blur', e => validate(e, input));
  }
}

resume && resume.addEventListener('change', e => validateFile(resume));
