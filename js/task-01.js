// Завдання 1

// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

const categorList = document.querySelector('#categories');
const categorItems = categories.querySelectorAll('.item');

console.log(`Number of categories: ${categorItems.length}`);

categorItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;

  console.log(`Category: ${title}
  Elements: ${elements}`);
});