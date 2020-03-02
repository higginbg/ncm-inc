// Animation on nav if home page

import { drpdwn, drpdwnBtn, callBtn, isRoot } from '../variables';

const addAnmtn = el => {
  const anmtn = 'slideInDown';
  el.classList.add(anmtn);
};

const navAnimation = () => {
  if (isRoot) {
    addAnmtn(drpdwn);
    addAnmtn(drpdwnBtn);
    addAnmtn(callBtn);
  }
};

export default navAnimation;
