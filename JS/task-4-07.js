const subBtnRef = document.querySelector('[data-action = decrement]');
const addBtnRef = document.querySelector('[data-action = increment]');
const textSpan = document.querySelector('#value');

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};

const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

subBtnRef.addEventListener('click', decrement);
addBtnRef.addEventListener('click', increment);
