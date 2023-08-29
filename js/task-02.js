const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainer = document.querySelector('#ingredients')

const ingredientsMarkup = ingredients.map(ingredient =>
  `<li> ${ingredient} </li>`).join('')
  ingredientsContainer.innerHTML = ingredientsMarkup
 