import Swal from 'sweetalert2';

import { form, requiredInputs } from '../variables';

let validateFile;
let validate;
let handleForm;

if (form) {

  // Encode data
  const urlencodeFormData = data => {
    let s = '';
    const encode = s => encodeURIComponent(s).replace(/%20/g, '+');
    for (const [id, value] of data.entries()) {
      if (typeof value == 'string') {
        s += (s ? '&' : '') + encode(id) + '=' + encode(value);
      }
    }
    return s;
  };

  const errMsg = () => {
    Swal.fire({
      icon: 'error',
      title: 'Error sending message.',
      html: `
        <div class="pv2 tl">
          <div class="pv2">You can still reach us!</div>
          <div class="f5 flex flex-row pa3">
            <div class="flex flex-column b pr2">
              <span class="mb1">Phone</span>
              <span class="mt1">Email</span>
            </div>
            <div class="flex flex-column pl2">
              <span class="mb1"><a href="tel:+1971-336-2341" class="link">(971) 336-2341</a></span>
              <span class="mt1"><a href="mailto:office@ncmreno.com" class="link">office@ncmreno.com</a></span>
            </div>
          </div>
          <div class="pv2">We apologize for any inconvenience.</div>
        </div>
      `,
      footer: '<a href="/" class="link">Return home</a>'
    });
  };

  // Send data in POST
  const sendData = data => {

    // Show loading animation if has file
    let hasFile = false;
    for (const [id, value] of data.entries()) {
      if (value.name) {
        hasFile = true;
        break;
      }
    }

    if (hasFile) {
      Swal.fire({
        title: 'Uploading file.',
        onBeforeOpen: () => Swal.showLoading()
      });
    }

    // Post data

    const options = {
      method: 'POST',
      body: hasFile ? data : urlencodeFormData(data),
    };

    if (!hasFile) {
      options.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    }

    fetch('/', options).then(resp => {

      if (!resp.ok) {
        errMsg();
        return;
      }

      // Show message details to user
      form.previousElementSibling.innerText = "We'll be in touch soon!";
      let list = '';

      for (const [id, value] of data.entries()) {
        if (id !== 'form-name') {
          list += `
            <h3 class="mt3">${id.charAt(0).toUpperCase() + id.slice(1)}</h3>
            <p class="mt1 bg-grey-1 br1 pa2 pre">${value.name === undefined ? value : (value.name || '(none)')}</p>
          `;
        }
      }

      form.innerHTML = `<div>${list}</div>`;

      Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        html: `
          <div class="pb2">
            <div class="pv2">Your message has been sent!</div>
            <div>We'll be in touch soon.</div>
          </div>
        `,
        footer: '<a href="/" class="link">Return home</a>'
      });
    }).catch(err => {
      errMsg();
    });
  };

  const submitForm = e => {
    const { value } = form.querySelector('#email');
    const data = new FormData(form);
    e.preventDefault();

    // Show warning if invalid email
    if (!(/^\S+@\S+$/).test(value)) {
      Swal.fire({
        icon: 'info',
        title: 'Submit?',
        showCancelButton: true,
        confirmButtonText: 'Send',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
        html: `
          <div class="pb2">
            <div class="pv2">Your email '${value}' is not properly formatted.</div>
            <div>Send anyway?</div>
          </div>
        `,
      }).then(result => {
        if (result.value) {
          sendData(data);
        }
      });
    } else {
      // Send data if required fields have values
      sendData(data);
    }
  };

  validateFile = el => {
    const filePath = el.value;
    const extn = /(\.pdf|\.doc|\.docx)$/i;

    const uploadError = msg => {
      Swal.fire({
        icon: 'error',
        title: 'Upload error.',
        text: msg
      });
      el.value = '';
    };

    if (filePath !== '' && !extn.test(filePath)) {
      uploadError('Please upload only pdf, doc, docx.');
    } else if (el.files[0].size > 1000000) {
      uploadError('Maximum file size is 1 MB.');
    }
  };

  const invalid = 'invalid';
  let flag = false;

  validate = (e, el) => {
    const { id, value, classList } = el;

    // Show error if blank field
    if (value.trim() === '') {
      e.preventDefault();
      flag = true;
      el.value = '';
      el.placeholder = 'Required';
      classList.add(invalid);
    } else {
      el.placeholder = id.charAt(0).toUpperCase() + id.slice(1);
      classList.remove(invalid);
    }
  };

  handleForm = e => {

    if (requiredInputs) {
      for (const input of requiredInputs) {
        validate(e, input);
      }
    }

    // Submit if all fields filled
    !flag && submitForm(e);
  };
}

export { validateFile, validate, handleForm };
