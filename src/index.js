// JS Goes here - ES6 supported

import './css/main.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'lightgallery.js/dist/js/lightgallery.min.js';
import 'lg-zoom.js/dist/lg-zoom.min.js';
import 'lg-thumbnail.js/dist/lg-thumbnail.min.js';

// Say hello
console.log('🦊 Hello! Edit me in src/index.js');

AOS.init({
  startEvent: 'load',
  duration: 1000,
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
const addAnmtn = el => {
  const anmtn = 'slideInDown';
  el.classList.add(anmtn);
};

if (isRoot) {
  addAnmtn(drpdwn);
  addAnmtn(drpdwnBtn);
  addAnmtn(callBtn);
}

const menuOpenIcon = '<i class="fas fa-bars"></i>';
const menuCloseIcon = '<i class="fas fa-times"></i>';
const navSmall = 'nav-small';

const closeMenu = () => {
  drpdwn.classList.remove(navSmall);
  drpdwnBtn.innerHTML = menuOpenIcon;
};

window.onresize = closeMenu;

window.addEventListener('load', () => {
  document.body.classList.remove('preload');

  lightGallery(document.getElementById('lightgallery'), {
    thumbnail: true,
    animateThumb: true,
    showThumbByDefault: false,
    subHtmlSelectorRelative: true,
    scale: .5,
    actualSize: false,
    download: false,
    addClass: 'o-10',
    selector: '.item'
  });

  AOS.refresh();
});

window.addEventListener('scroll', shrinkNav);

window.addEventListener('click', ({ target }) => {

  const tag = target.tagName.toLowerCase();

  if (drpdwn.classList.contains(navSmall) && !target.closest('nav')) {
    closeMenu();
  }

  if (tag === 'input' || tag === 'textarea') {
    document.body.paddingTop = `${document.body.paddingTop + nav.clientHeight}px`;
  } else {
    document.body.paddingTop = `${document.body.paddingTop - nav.clientHeight}px`;
  }
});

nav.addEventListener('click', e => e.stopPropagation());

drpdwnBtn.addEventListener('click', () => {
  drpdwn.classList.toggle(navSmall);
  drpdwnBtn.innerHTML = drpdwn.classList.contains(navSmall) ? menuCloseIcon : menuOpenIcon;
});

// Highlight nav link when current page
const url = window.location.href.split('/');
const page = url[3];

for (const link of links) {
  const navLoc = link.href.split('/');
  const checkNav = navLoc[navLoc.length - 1];

  const isHome = !checkNav && isRoot;
  const isCurrentPath = page.toLowerCase() === link.text.toLowerCase();
  const isCurrentPage = page === checkNav;

  if (isCurrentPath || isHome) {
    link.classList.add('selected');

    if (isCurrentPage || isHome) {
      link.classList.remove('nav-link');
    }
  }
}


/* Handle swiping left to close menu */
/* Found here: https://stackoverflow.com/questions/15084675/how-to-implement-swipe-gestures-for-mobile-devices */

let xDown = null;
let yDown = null;

const handleTouchStart = e => {
  xDown = e.touches[0].clientX;
  yDown = e.touches[0].clientY;
};

const handleTouchMove = e => {
  if (!xDown || !yDown) {
    return;
  }
  var xUp = e.touches[0].clientX;
  var yUp = e.touches[0].clientY;
  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if ( Math.abs(xDiff) > Math.abs(yDiff) ) { /*most significant*/

    if (xDiff > 0) {
      /* left swipe */
      closeMenu();
    } else {
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }

  /* reset values */
  xDown = null;
  yDown = null;
};

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
