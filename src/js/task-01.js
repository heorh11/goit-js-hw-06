const listOfCategories = document.querySelectorAll(".item")
console.log(`Number of categories: ${listOfCategories.length}`);
listOfCategories.forEach(item => {
   listOfCategories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
       console.log(`Elements: ${category.querySelectorAll("li").length}`);
       
});
})