// variables
const nav            = document.getElementById('nav');
const drpdwn         = nav.querySelector('ul');
const drpdwnBtn      = nav.querySelector('button');
const callBtn        = document.getElementById('call');
const form           = document.querySelector('form');
const requiredInputs = form ? form.querySelectorAll('[required]') : null;
const resume         = form ? form.querySelector('#resume input') : null;
const resumeBtn      = form ? form.querySelector('#resume button') : null;

const isRoot = location.pathname === '/';

const menuOpenIcon = '<i class="fas fa-bars"></i>';
const menuCloseIcon = '<i class="fas fa-times"></i>';
const navSmall = 'nav-small';

export {
  nav,
  drpdwn,
  drpdwnBtn,
  callBtn,
  form,
  requiredInputs,
  resume,
  resumeBtn,
  isRoot,
  menuOpenIcon,
  menuCloseIcon,
  navSmall
};
