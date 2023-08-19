const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainer = document.querySelector('#ingredients')
ingredients.forEach(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
   ingredientEl.classList.add("item");
  console.log(ingredientEl)
  ingredientsContainer.append(ingredientEl)
});
