const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const listEl = document.querySelector('ul[id="ingredients"]');

const addLiEl = ingredients.map(element => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = element;

  return itemEl;
});

listEl.append(...addLiEl);
