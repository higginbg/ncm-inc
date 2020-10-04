import AOS from 'aos';

export const init = () => {
  AOS.init({
    startEvent: 'load',
    duration: 1000,
    once: true,
    easing: 'ease',
  });
};
