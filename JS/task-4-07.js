const subBtnRef = document.querySelector('.decrement');
const addBtnRef = document.querySelector('.increment');
const textSpanRef = document.querySelector('#value');

let counterValue = 0;
const decrement = () => (textSpanRef.textContent = counterValue -= 1);

const increment = () => (textSpanRef.textContent = counterValue += 1);

subBtnRef.addEventListener('click', decrement);
addBtnRef.addEventListener('click', increment);
