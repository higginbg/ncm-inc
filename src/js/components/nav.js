const nav = document.getElementById('nav');
const dropdown = nav.querySelector('ul');
const btn = nav.querySelector('button');

const isRoot = location.pathname === '/';
const navOpenIcon = '<i class="fas fa-bars"></i>';
const navCloseIcon = '<i class="fas fa-times"></i>';

export const navSmall = 'nav-small';

export const init = () => {
  nav.addEventListener('click', e => {
    e.stopPropagation();
  });

  btn.addEventListener('click', () => {
    shrink();
    dropdown.classList.toggle(navSmall);
    btn.innerHTML = dropdown.classList.contains(navSmall)
      ? navCloseIcon
      : navOpenIcon;
  });

  window.addEventListener('load', () => {
    highlight();
  });

  window.addEventListener('click', ({ target }) => {
    // close nav on click
    const tag = target.tagName.toLowerCase();
    if (dropdown.classList.contains(navSmall) && !target.closest('nav')) {
      close();
    }

    // Add padding for nav when input is clicked
    const height =
      tag === 'input' || tag === 'textarea'
        ? nav.clientHeight
        : -nav.clientHeight;
    document.body.paddingTop = `${document.body.paddingTop + height}px`;
  });

  window.addEventListener('scroll', () => {
    close();
    shrink();
  });

  window.addEventListener('resize', () => {
    close();
  });
};

export const highlight = () => {
  const links = dropdown.querySelectorAll('li a');
  const url = window.location.href.split('/');
  const page = url[3];

  for (const link of links) {
    const navLoc = link.href.split('/');
    const checkNav = navLoc[navLoc.length - 1];

    const isHome = !checkNav && isRoot;
    const isCurrentPath = page.toLowerCase() === link.text.toLowerCase();
    const isCurrentPage = page === checkNav;

    if (isCurrentPath || isHome) {
      link.classList.add('active');
      link.tabIndex = -1;

      if (isCurrentPage || isHome) {
        link.classList.remove('nav-link');
      }
    }
  }
};

export const close = () => {
  dropdown.classList.remove(navSmall);
  btn.innerHTML = navOpenIcon;
};

const scrollPos = () =>
  window.pageYOffset || document.documentElement.scrollTop;

let lastScroll = scrollPos();
export const shrink = () => {
  const shrinkClass = 'small';

  const shrinkEl = (shrink, el, l, s) => {
    shrink ? el.classList.replace(l, s) : el.classList.replace(s, l);
  };

  const currScroll = scrollPos();
  const notTop =
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
  const shrink = notTop && currScroll > lastScroll;

  shrink ? nav.classList.add(shrinkClass) : nav.classList.remove(shrinkClass);

  shrinkEl(shrink, nav, 'o-100', 'o-90');
  shrinkEl(shrink, nav, 'f5-m', 'f6-m');

  lastScroll = scrollPos();
};
