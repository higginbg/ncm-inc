import axios from 'axios';
import swal from 'sweetalert';

import { form } from '../variables';

let handleForm;

if (form) {

  const inputs = form.querySelectorAll('[required]');

  const submitForm = e => {
    const data = new FormData(form);
    e.preventDefault();
    axios.post(form.getAttribute('action'), data)
      .then(resp => {
        console.log(resp);
        swal('Your message has been sent!', {
          icon: 'success',
        });
      })
      .catch(err => {
        swal('\nAn error has occured. Please contact us via phone or email.\n\nSorry for any inconvenience.', {
          title: 'Error sending message',
          icon: 'error',
        });
        console.log(err);
      });
  };

  handleForm = e => {
    let flag = false;
    for (const input of inputs) {
      if (input.value.trim() === '') {
        e.preventDefault();
        flag = true;
        swal('Oops!', `Please provide a value for '${input.id}'.`, 'error');
        break;
      }

      if (input.id === 'email') {
        if (!(/^\S+@\S+$/).test(input.value)) {
          e.preventDefault();
          swal({
            title: 'Submit?',
            text: '\nYour email is not properly formatted.\n\nWould you still like to submit?',
            icon: 'info',
            buttons: true,
          }).then(willSubmit => {
            if (willSubmit) {
              submitForm(e);
            }
          });
        }
      }
    }
    !flag && submitForm(e);
  };
}

export default handleForm;
