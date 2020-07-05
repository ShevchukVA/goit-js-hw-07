const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', event => {
  if (
    Number(inputRef.getAttribute('data-length')) ===
    Number(event.target.value.length)
  ) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
});
