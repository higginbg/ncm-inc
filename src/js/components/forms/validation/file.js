import Swal from 'sweetalert2';

export const validateFile = el => {
  const label = document.getElementById('specs');
  const filenameEl = document.getElementById('filename');
  label.classList.add('db');

  const filePath = el.value;
  const extn = /(\.pdf|\.doc|\.docx)$/i;

  let error = '';
  if (filePath !== '' && !extn.test(filePath)) {
    error = 'Please upload only pdf, doc, docx.';
  } else if (el.files[0].size > 1000000) {
    error = 'Maximum file size is 1 MB.';
  }

  if (!error) {
    label.classList.replace('db', 'dn');

    const fileSplit = filePath.split('\\');
    const fileName = fileSplit[fileSplit.length - 1];
    filenameEl.textContent = fileName;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Upload error.',
      text: error,
    });
    el.value = '';
    filenameEl.textContent = '';
  }
};
