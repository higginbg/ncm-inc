// Highlight nav link when current page

import { drpdwn, isRoot } from '../variables';

const navHighlight = () => {
  const links = drpdwn.querySelectorAll('li a');
  const url   = window.location.href.split('/');
  const page  = url[3];

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
};

export default navHighlight;
