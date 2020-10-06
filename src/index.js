import * as lozad from './js/components/lozad';
import * as aos from './js/components/aos';
import * as touch from './js/components/touch';
import * as lightGallery from './js/components/lightGallery';
import * as nav from './js/components/nav';
import * as forms from './js/components/forms/init';
import './css/main.css';

lozad.init();

aos.init();

nav.init();

touch.init();

lightGallery.init();

forms.init();

const fitToGallery = () => {
  const details = document.getElementById('project-details');
  const gallery = document.getElementById('gallery-container');
  if (details && gallery) {
    details.style.height = `calc(${gallery.clientHeight}px + var(--intro-offset) + var(--spacing-extra-large))`;
    details.style.minHeight = 'auto';
    details.classList.remove('overflow-auto');
  }
};

window.addEventListener('load', fitToGallery);

window.addEventListener('resize', fitToGallery);
