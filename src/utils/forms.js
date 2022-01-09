import serialize from 'form-serialize';

function validateForm(form) {
  if (form.checkValidity() === false) {
    form.classList.add('was-validated');
    return false;
  }

  return true;
}

export function formSubmit(submit, options) {
  const { hash = true, empty } = options || {};

  return (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.target;
    const isValid = validateForm(form);

    if (isValid) {
      const formData = serialize(form, { hash, empty });

      submit(formData);
    }
  };
}
