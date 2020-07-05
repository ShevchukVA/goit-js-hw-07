const listRef = document.querySelector('#categories').children;
console.log(`В списке ${listRef.length} категории.`);

for (let elem of listRef) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
}
