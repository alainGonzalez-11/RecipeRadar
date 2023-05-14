var recipeBook = [];

/**
 * The function loads a carousel with three random recipes from a JSON file, after validating each
 * recipe.
 * @param recipes - an array of recipe objects, obtained from parsing a JSON file using the Fetch API.
 */
fetch("Resources\\Auxiliar files\\recipes.json")
  .then((response) => response.json())
  .then((recipes) => {
    // Data is now a JavaScript object
    recipeBook = recipes;
    console.log(recipeBook);
    console.log(retrieveRecipe());
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function retrieveRecipe() {
  const recipeIdToFind = localStorage.getItem("RecipeId");
  // Old JS code for iterating through arrays
  /* console.log(recipeIdToFind);
    for (let i = 0; i < recipeBook.length; i++) {
      if (recipeBook[i].RecipeId === recipeIdToFind) {
        return foundRecipe = recipeBook[i];
      }
    } */

  // Applying ES6
  const foundRecipe = revipeBook.find(
    (recipe) => recipe.RecipeId === recipeIdToFind
  );
}
