// Grow or shrink Nav if page is scrolled up/down

import { nav, logo } from '../variables';

const shrinkClass = 'small';

const logoContainer = document.getElementById('logo-container');
const subtitle = nav.querySelector('.subtitle');

const shrinkEl = (shrink, el, l, s) => {
  shrink
    ? el.classList.replace(l, s)
    : el.classList.replace(s, l);
};

const scrollPos = () => window.pageYOffset || document.documentElement.scrollTop;

let lastScroll = scrollPos();
const navShrink = () => {
  const currScroll = scrollPos();
  const notTop = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
  const shrink = notTop && currScroll > lastScroll;

  shrink ? nav.classList.add(shrinkClass) : nav.classList.remove(shrinkClass);
  shrink ? subtitle.classList.add(shrinkClass) : subtitle.classList.remove(shrinkClass);
  logoContainer.style.flexDirection = shrink ? 'row' : 'column';

  shrinkEl(shrink, nav, 'o-100', 'o-90');
  shrinkEl(shrink, nav, 'f5-m', 'f6-m');

  // Decreases link fonts
  lastScroll = scrollPos();
};

export default navShrink;
