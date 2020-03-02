// Toggle menu button

import { drpdwn, drpdwnBtn, navSmall, menuOpenIcon } from '../variables';

const menuClose = () => {
  drpdwn.classList.remove(navSmall);
  drpdwnBtn.innerHTML = menuOpenIcon;
};

export default menuClose;
