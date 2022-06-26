const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const listEl = document.getElementById("ingredients");

const addLiEl = ingredients.forEach(element => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = element;

  return listEl.appendChild(itemEl); // многократное добавление элемента?
});