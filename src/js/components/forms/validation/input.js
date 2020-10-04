export const validate = (e, el) => {
  const { id, value, classList } = el;

  const invalidClass = 'invalid';
  let flag = false;

  // Show error if blank field
  if (value.trim() === '') {
    e.preventDefault();
    flag = true;
    el.value = '';
    el.placeholder = 'Required';
    classList.add(invalidClass);
  } else {
    el.placeholder = id.charAt(0).toUpperCase() + id.slice(1);
    classList.remove(invalidClass);
  }

  return flag;
};
