const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  if (event.target.value !== '') {
    spanRef.textContent = event.target.value;
  } else {
    spanRef.textContent = 'незнакомец';
  }
});
