// JS Goes here - ES6 supported

import './css/main.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Say hello
console.log('🦊 Hello! Edit me in src/index.js');

AOS.init({
  startEvent: 'load',
  duration: 500,
  once: true,
  easing: 'ease'
});

const nav         = document.getElementById('nav');
const navDum      = document.getElementById('nav-dummy');
const contactCont = document.getElementById('contact-container');
const contactForm = document.getElementById('contact-form');
const logo        = nav.querySelector('a');
const drpdwnBtn   = nav.querySelector('button');
const drpdwn      = nav.querySelector('ul')
const links       = drpdwn.querySelectorAll('li a');


// Grow or shrink Nav if page is scrolled up/down

const scrollPos = () => window.pageYOffset || document.documentElement.scrollTop;

let lastScroll = scrollPos();
const shrinkNav = () => {
  const currScroll = scrollPos();
  const notTop = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
  const shrink = notTop && currScroll > lastScroll;

  const shrinkEl = el => {
    shrink
      ? el.classList.replace('pa3-ns', 'pa2-ns')
      : el.classList.replace('pa2-ns', 'pa3-ns');
  };

  shrinkEl(logo);
  shrinkEl(drpdwnBtn);

  // Shrink links
  for (const link of links) {
    shrinkEl(link);
  }

  // Decreases link fonts
  shrink ? nav.classList.replace('f5-ns', 'f6-ns') : nav.classList.replace('f6-ns', 'f5-ns');
  navDum.style.fontheight = nav.clientHeight;
  lastScroll = scrollPos();
};

// Only slide nav bar if on home page
const isRoot = location.pathname === '/';
if (isRoot) {
  drpdwn.classList.add('slideInDown');
}

window.onscroll = shrinkNav;
window.onload = AOS.refresh;

drpdwnBtn.addEventListener('click', () => {
  drpdwn.classList.remove('dn');
  if (drpdwn.classList.contains('slideInRight')) {
    drpdwn.classList.remove('slideInRight');
    drpdwn.classList.add('slideOutRight', 'faster');
  } else {
    drpdwn.classList.add('slideInRight');
    drpdwn.classList.remove('slideOutRight', 'faster');
  }
});

/*
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const height = contactCont.clientHeight;
  contactCont.innerHTML = `
    <h4 class="f3 tc animated fadeIn">Thank you for your message!</br>
    We'll be in touch soon.</h4>
  `;
  contactCont.style.height = `${height}px`;
  contactCont.parentElement.classList.remove('measure-narrow');
  contactCont.classList.add('flex', 'items-center');
});
*/

// Highlight nav link when current page
const url = window.location.href.split('/');
const page = url[url.length - 2];
for (const link of links) {
  const navLoc = link.href.split('/');
  const checkNav = navLoc[navLoc.length - 1];
  if (page === checkNav) {
    link.classList.add('bg-grey-3');
  }
}
