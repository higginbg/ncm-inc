import Swal from 'sweetalert2';

import { showError } from './showError';

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

// Send data in POST
export const sendData = async (form, data) => {
  // Show loading animation if has file
  let hasFile = false;
  for (const [_, value] of data.entries()) {
    if (value.name) {
      hasFile = true;
      break;
    }
  }

  if (hasFile) {
    Swal.fire({
      title: 'Uploading file.',
      onBeforeOpen: () => Swal.showLoading(),
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

  let response;
  try {
    response = await fetch('/', options);
  } catch (err) {
    showError();
  }

  if (!response.ok) {
    showError();
    return;
  }

  // Show message details to user
  let list = '';
  let error = '';
  for (const [id, value] of data.entries()) {
    const userInput = value.name || value;

    if (id !== 'form-name') {
      if (id !== 'resume' && !userInput) {
        error = 'An error has occured, please submit again';
        break;
      }

      list += `
        <h3 class="b primary mt3">${id.charAt(0).toUpperCase() + id.slice(1)}</h3>
        <p class="mt1 bg-grey-1 pa2 br1 pre">${userInput || '(none)'}</p>
      `;
    }
  }

  if (error) {
    form.previousElementSibling.innerHTML = `
      <div class="mt3">
        <span class="db mb2">Error sending message.</span>
        <span class="db mt2">Please try again.</span>
      </div>
    `;
    form.remove();
    showError();
    return;
  }

  form.previousElementSibling.innerText = "We'll be in touch soon!";
  form.innerHTML = `<div class="black pa3">${list}</div>`;

  Swal.fire({
    icon: 'success',
    title: 'Thank you!',
    html: `
      <div class="pb2">
        <div class="pv2">Your message has been sent!</div>
        <div>We'll be in touch soon.</div>
      </div>
    `,
    footer: '<a href="/" class="link">Return home</a>',
  });
};
