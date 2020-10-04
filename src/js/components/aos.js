import AOS from 'aos';
import 'aos/dist/aos.css';

export const init = () => {
  AOS.init({
    startEvent: 'load',
    duration: 1000,
    once: true,
    easing: 'ease',
  });
};
