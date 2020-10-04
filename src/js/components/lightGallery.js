import 'lightgallery.js';
import 'lg-zoom.js/dist/lg-zoom.min.js';

export const init = () => {
  const lg = document.getElementById('lightgallery');

  if (lg) {
    lightGallery(lg, {
      subHtmlSelectorRelative: true,
      scale: 0.5,
      actualSize: false,
      download: false,
      selector: '.item',
    });
  }
};
