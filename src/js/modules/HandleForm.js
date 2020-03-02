import swal from 'sweetalert';

import { form } from '../variables';

let handleForm;

if (form) {

  const inputs = form.querySelectorAll('[required]');

  const urlencodeFormData = data => {
    let s = '';
    const encode = s => encodeURIComponent(s).replace(/%20/g, '+');
    for (var pair of data.entries()) {
      if (typeof pair[1] == 'string') {
        s += (s ? '&' : '') + encode(pair[0]) + '=' + encode(pair[1]);
      }
    }
    return s;
  };

  const submitForm = e => {
    const data = new FormData(form);
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `form-name=${form.id}` + urlencodeFormData(data)
    })
      .then(resp => {
        console.log(resp);
        swal('Your message has been sent!', {
          title: 'Success!',
          icon: 'success',
        });
      })
      .catch(err => {
        console.log(err);
        swal('\nAn error has occured. Please contact us via phone or email.\n\nSorry for any inconvenience.', {
          title: 'Error sending message',
          icon: 'error',
        });
      });
  };

  handleForm = e => {
    let flag = false;
    for (const input of inputs) {
      const { id, value } = input;

      if (value.trim() === '') {
        e.preventDefault();
        flag = true;
        swal('Oops!', `Please provide your ${id}.`, 'error');
        break;
      }

      if (id === 'email') {
        if (!(/^\S+@\S+$/).test(value)) {
          e.preventDefault();
          flag = true;
          swal({
            title: 'Submit?',
            text: `\nYour email '${value}' is not properly formatted.\n\nWould you still to submit anyway?`,
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
