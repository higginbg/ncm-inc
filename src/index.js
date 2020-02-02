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
const logo        = nav.querySelector('a');
const drpdwnBtn   = nav.querySelector('button');
const drpdwn      = nav.querySelector('ul');
const callBtn     = nav.querySelector('#call');
const links       = drpdwn.querySelectorAll('li a');

const isRoot = location.pathname === '/';


// Grow or shrink Nav if page is scrolled up/down

const scrollPos = () => window.pageYOffset || document.documentElement.scrollTop;

let lastScroll = scrollPos();
const shrinkNav = () => {
  const currScroll = scrollPos();
  const notTop = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
  const shrink = notTop && currScroll > lastScroll;

  const shrinkEl = el => {
    shrink
      ? el.classList.replace('pa3-m', 'pa2-m')
      : el.classList.replace('pa2-m', 'pa3-m');
  };

  shrinkEl(logo);
  shrinkEl(drpdwnBtn);

  // Shrink links
  for (const link of links) {
    shrinkEl(link);
  }

  // Decreases link fonts
  shrink ? nav.classList.replace('f5-m', 'f6-m') : nav.classList.replace('f6-ns', 'f5-ns');
  navDum.style.fontheight = nav.clientHeight;
  lastScroll = scrollPos();
};

// Only slide nav bar if on home page
if (isRoot) {
  const anmtn = 'slideInDown';
  drpdwn.classList.add(anmtn);
  drpdwnBtn.classList.add(anmtn);
  callBtn.classList.add(anmtn);
}


const menuOpenIcon = '<i class="fas fa-bars"></i>';
const menuCloseIcon = '<i class="fas fa-times"></i>';
const navSmall = 'nav-small';

const closeMenu = () => {
  drpdwn.classList.remove(navSmall);
  drpdwnBtn.innerHTML = menuOpenIcon;
};

window.onload = AOS.refresh;
window.onscroll = shrinkNav;
window.onresize = closeMenu;

window.addEventListener('click', e => {
  if (drpdwn.classList.contains(navSmall) && !e.target.closest('nav')) {
    closeMenu();
  }
});

nav.addEventListener('click', e => {
  e.stopPropagation();
});

drpdwnBtn.addEventListener('click', () => {
  drpdwn.classList.toggle(navSmall);
  drpdwnBtn.innerHTML = drpdwn.classList.contains(navSmall) ? menuCloseIcon : menuOpenIcon;
});

// Highlight nav link when current page
const url = window.location.href.split('/');
const page = url[url.length - 2];
for (const link of links) {
  const navLoc = link.href.split('/');
  const checkNav = navLoc[navLoc.length - 1];
  if (!checkNav && isRoot || page === checkNav) {
    link.classList.add('bg-grey-3');
  }
}
