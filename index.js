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
    loadCarousel(recipes);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function loadCarousel(recipes) {
  const carousel = document.querySelector("#carousel-recipes");
  let recipeCount = 0;
  while (recipeCount < 3) {
    const recipe = recipes[Math.floor(Math.random() * recipes.length)];
    if (validateRecipe(recipe)) {
      carousel.insertAdjacentHTML(
        "beforeend",
        createCarouselElements(recipe, recipeCount)
      );
      recipeCount++;
    }
  }
}

/**
 * The function validates a recipe based on its aggregated rating.
 * @param recipe - The recipe object that contains information about a recipe, including its aggregated
 * rating.
 * @returns The function `validateRecipe` returns a boolean value indicating whether the
 * `AggregatedRating` property of the `recipe` object is greater than or equal to the
 * `VALIDATION_RATING` constant, which is set to 5.
 */
function validateRecipe(recipe) {
  // TODO: Validate image urls avoiding carousel getting no image recipes.
  const VALIDATION_RATING = 5;
  return recipe.AggregatedRating >= VALIDATION_RATING;
}

/**
 * The function creates HTML elements for a carousel using a recipe object and a recipe count.
 * @param recipe - An object containing information about a recipe, including its name, description,
 * and images.
 * @param recipeCount - The index of the recipe in the array of recipes.
 * @returns a string of HTML code that represents a carousel item for a recipe. The HTML code includes
 * the recipe's image, name, and description.
 */
function createCarouselElements(recipe, recipeCount) {
  let image = "";
  if (recipe.Images[0] == "c" && recipe.Images.length > 1) {
    image = recipe.Images[1];
  } else {
    image = recipe.Images[0];
  }
  let activation = "";
  if (recipeCount == 0) {
    activation = "active ";
  }
  /* Traditional JS declaration.
  
  const carouselRecipeHTML =
    '<div class="carousel-item ' +
    activation +
    'image-crop"><img src="' +
    image +
    '" onerror="handleImageError()" class="d-block w-100" alt="' +
    recipe.Name +
    '"/> <div class="carousel-caption d-none d-sm-block"><h5>' +
    recipe.Name +
    "</h5><p>" +
    recipe.Description +
    "</p></div></div>\n\n"; */

  // Declaration of HTML code using ES6 for improved readibility
  const carouselRecipeHTML = `
    <div class="carousel-item ${activation} image-crop">
      <img
        src="${image}" 
        onerror="handleImageError()" 
        class="d-block w-100 clickable-text" 
        alt="${recipe.Name}" 
        onClick="viewRecipe(${recipe.RecipeId})"
      />
      <div class="carousel-caption d-none d-sm-block clickable-text">
        <h5  onClick="viewRecipe(${recipe.RecipeId})">${recipe.Name}</h5>
        <p>${recipe.Description}</p>
      </div>
    </div>
  `;
  return carouselRecipeHTML;
}

/**
 * The function handles errors that occur when loading an image.
 */
function handleImageError() {
  // Code to handle the error, such as displaying a fallback image or showing an error message
  console.log("Image not found or error occurred");
}

/**
 * The function sets a recipe ID in local storage and redirects the user to a recipe page.
 * @param RecipeId - The ID of a recipe that the user wants to view. This function sets the RecipeId in
 * the browser's local storage and redirects the user to the recipe.html page.
 */
function viewRecipe(RecipeId) {
  localStorage.setItem("RecipeId", RecipeId);
  console.log(localStorage.getItem("RecipeId"));
  window.location.href = "recipe.html";
}
