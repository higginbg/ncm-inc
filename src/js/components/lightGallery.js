export const init = async () => {
  const lg = document.getElementById('lightgallery');

  if (lg) {
    await import('lightgallery.js');
    await import('lg-zoom.js/dist/lg-zoom.min.js');

    lightGallery(lg, {
      subHtmlSelectorRelative: true,
      scale: 0.5,
      actualSize: false,
      download: false,
      selector: '.item',
    });
  }
};
