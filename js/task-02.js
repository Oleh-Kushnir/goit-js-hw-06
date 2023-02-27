// Завдання 2

// Створіть окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrList = document.querySelector('#ingredients')

const elements = ingredients.map(ingredient => {

  const ingrItem = document.createElement("li");
  ingrItem.classList.add('item');
  ingrItem.textContent = ingredient;

  return ingrItem
});

ingrList.append(...elements);




