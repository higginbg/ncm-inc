import Swal from 'sweetalert2';

import { sendData } from './send';

export const submit = async e => {
  e.preventDefault();

  const form = document.querySelector('form');
  const { value: email } = form.querySelector('#email');

  // Show warning if invalid email
  if (!/^\S+@\S+$/.test(email)) {
    const result = await Swal.fire({
      icon: 'info',
      title: 'Submit?',
      showCancelButton: true,
      confirmButtonText: 'Send',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      html: `
        <div class="pb2">
          <div class="pv2">Your email '${email}' is not properly formatted.</div>
          <div>Send anyway?</div>
        </div>
      `,
    });

    if (!result.value) {
      return;
    }
  }

  const data = new FormData(form);
  sendData(form, data);
};
