function nameMenuItem(name) {
  var saying = "Delicious " + name;

  return saying;
}
function createMenuItem(name, price, type) {
  var menuItem = {
    name,
    price,
    type,
  };
  return  menuItem;
}
function addIngredients(ingredient1,ingredientArray) {
    ingredientArray

    if (ingredientArray.includes(ingredient1)) {
      return ingredientArray;
    }else {
      return ingredientArray.push(ingredient1);
    }

}
function formatPrice(price) {
  var dollarSign = "$" + price;

  return dollarSign;
}

function decreasePrice(price) {
  var minusPercent = price * (1 - 0.10);

  return minusPercent
}
function createRecipe(title, ingredients, type) {
  var addAnIngredient = {
    title,
    ingredients,
    type,

  };
  return addAnIngredient;
}

module.exports = {
  nameMenuItem,
  // createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
