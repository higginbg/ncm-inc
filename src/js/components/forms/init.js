import { validate } from './validation/input';
import { validateFile } from './validation/file';
import { submit } from './submit';

const handleForm = (e, form) => {
  const requiredInputs = form.querySelectorAll('[required]');

  let flag = false;

  if (requiredInputs) {
    for (const input of requiredInputs) {
      flag = validate(e, input);
      if (flag) {
        break;
      }
    }
  }

  // Submit if all fields filled
  if (!flag) {
    submit(e);
  }
};

export const init = () => {
  const form = document.querySelector('form');
  if (!form) {
    return;
  }

  const requiredInputs = form.querySelectorAll('[required]');
  const resume = form.querySelector('#resume input');
  const resumeBtn = form.querySelector('#resume button');

  form.addEventListener('submit', e => handleForm(e, form));

  if (requiredInputs) {
    for (const input of requiredInputs) {
      input.addEventListener('blur', e => validate(e, input));
    }
  }

  if (resume) {
    resume.addEventListener('change', () => validateFile(resume));
  }
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => resume.click());
  }
};
