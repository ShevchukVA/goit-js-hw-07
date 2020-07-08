const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

const createItem = ingr => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingr;
  return itemRef;
};

const listItems = ingredients.map(ingr => createItem(ingr));
listRef.append(...listItems);
