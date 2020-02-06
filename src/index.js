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
const drpdwnBtn   = nav.querySelector('button');
const drpdwn      = nav.querySelector('ul');
const callBtn     = document.getElementById('call');
const links       = drpdwn.querySelectorAll('li a');

const isRoot = location.pathname === '/';


// Grow or shrink Nav if page is scrolled up/down

const scrollPos = () => window.pageYOffset || document.documentElement.scrollTop;

let lastScroll = scrollPos();
const shrinkNav = () => {
  const currScroll = scrollPos();
  const notTop = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
  const shrink = notTop && currScroll > lastScroll;

  const shrinkEl = (el, l, s) => {
    shrink
      ? el.classList.replace(l, s)
      : el.classList.replace(s, l);
  };

  shrink ? nav.classList.add('small') : nav.classList.remove('small');

  shrinkEl(nav, 'o-100', 'o-90');
  shrinkEl(nav, 'f5-m', 'f6-m');

  // Decreases link fonts
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

window.onresize = closeMenu;

window.addEventListener('load', AOS.refresh);

window.addEventListener('scroll', shrinkNav);

window.addEventListener('click', e => {
  if (drpdwn.classList.contains(navSmall) && !e.target.closest('nav')) {
    closeMenu();
  }
});

nav.addEventListener('click', e => e.stopPropagation());

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
    link.classList.add('bg-grey-4');
  }
}
