import 'aos/dist/aos.css';

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

window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});
