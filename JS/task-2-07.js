const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

const liRef = ingredients.forEach(ingr => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingr;
  listRef.appendChild(itemRef);
});
