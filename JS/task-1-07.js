const listRef = document.querySelectorAll('#categories>li.item');
console.log(`В списке ${listRef.length} категории.`);

const categoryAndQuantityRef = listRef.forEach(elem => {
  console.log(
    `Категория: ${elem.querySelector('h2').textContent} 
Количество элементов: ${elem.querySelectorAll('li').length}`,
  );
});
