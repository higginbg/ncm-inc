import lozad from 'lozad';

export const init = () => {
  const lozadEl = document.querySelectorAll('.lozad');
  if (lozadEl.length > 0) {
    const observer = lozad(lozadEl); // lazy loads elements with default selector as '.lozad'
    observer.observe();

    const lozadTrig = document.querySelector('.lozad-trigger');
    observer.triggerLoad(lozadTrig);
  }
};
