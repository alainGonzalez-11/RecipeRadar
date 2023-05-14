/**
 * The function loads a carousel with three random recipes from a JSON file, after validating each
 * recipe.
 * @param recipes - an array of recipe objects, obtained from parsing a JSON file using the Fetch API.
 */
fetch("Resources\\Auxiliar files\\recipes.json")
  .then((response) => response.json())
  .then((recipes) => {
    // Data is now a JavaScript object

    loadCarousel(recipes);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function loadCarousel(recipes) {
  const carousel = document.querySelector("#carousel-recipes");
  console.log(carousel);
  let recipeCount = 0;
  while (recipeCount < 3) {
    const recipe = recipes[Math.floor(Math.random() * recipes.length)];
    console.log(recipe);
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
 * @param recipe - The recipe object that needs to be validated. It is likely to have properties such
 * as AggregatedRating and image urls. The function is checking if the AggregatedRating property of the
 * recipe is equal to 5.
 * @returns a boolean value that indicates whether the AggregatedRating of the recipe is equal to 5 or
 * not.
 */
function validateRecipe(recipe) {
  // TODO: Validate image urls avoiding carousel getting no image recipes.
  return recipe.AggregatedRating == 5;
}

/**
 * The function creates HTML elements for a carousel slide using recipe data.
 * @param recipe - An object containing information about a recipe, including its name, description,
 * and images.
 * @param recipeCount - The index of the recipe in the list of recipes. It is used to determine if the
 * carousel item should be set as active or not.
 * @returns a string of HTML code that represents a carousel item for a recipe. The HTML code includes
 * an image, the recipe name, and description. The "active" class is added to the first recipe item to
 * indicate that it is the currently active item in the carousel.
 */
function createCarouselElements(recipe, recipeCount) {
  console.log(recipe.Images);
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
  const text =
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
    "</p></div></div>\n\n";
  return text;
}

/**
 * The function handles errors that occur when loading an image.
 */
function handleImageError() {
  // Code to handle the error, such as displaying a fallback image or showing an error message
  console.log("Image not found or error occurred");
}
