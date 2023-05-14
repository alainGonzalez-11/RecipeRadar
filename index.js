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
    loadCards(recipes);
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




function loadCards(recipes){
  const cardSection = document.querySelector("#card-section");
  let cardsHTML = "";

  const MIN_RECIPE_COUNT = 4;
  const MAX_CATEGORY_COUNT = 10;

  const categories = Array.from(new Set(recipes.map(recipe => recipe.RecipeCategory)));

  let randomCategories = getRandomItems(categories, MAX_CATEGORY_COUNT);

  // Filter out categories with less than MIN_RECIPE_COUNT recipes
  randomCategories = randomCategories.filter(category => {
    const recipeCount = recipes.filter(recipe => recipe.RecipeCategory === category).length;
    return recipeCount >= MIN_RECIPE_COUNT;
  });

  // If the number of categories is less than MAX_CATEGORY_COUNT, select additional categories
  while (randomCategories.length < MAX_CATEGORY_COUNT) {
    const remainingCategories = categories.filter(category => !randomCategories.includes(category));
    const additionalCategories = getRandomItems(remainingCategories, MAX_CATEGORY_COUNT - randomCategories.length);
    randomCategories.push(...additionalCategories);
  }



  randomCategories.forEach(CATEGORY_TO_FIND => {
    cardsHTML += `
      <div class="d-flex justify-content-center subheader">
        <div class=""></div>
        <h2 class="text-justify-center">Featured ${CATEGORY_TO_FIND} recipes.</h2>
      </div>
      <div class="card-group">
    `
    const filteredRecipes = recipes  
    .filter(recipe => recipe.RecipeCategory === CATEGORY_TO_FIND)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

    filteredRecipes.forEach(foundRecipe => {
      cardsHTML+=createCard(foundRecipe)
    });

    cardsHTML += `
      </div>
    `
  });
  cardSection.innerHTML = cardsHTML;
  
}

function getRandomItems(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


function createCard(recipe) {
  const cardHTML = `
      <div class="card col-sm-6 col-md-4 col-lg-3 m-2">
        <img
          src="${recipe.Images[0]}"
          class="card-img-top image-crop-card clickable-text"
          alt="card-group-image"
          onClick="viewRecipe(${recipe.RecipeId})"
          onerror="handleImageError()" 
        />
        <div class="card-body">
          <h5 class="card-title clickable-text" onClick="viewRecipe(${recipe.RecipeId})">${recipe.Name}</h5>
          <p class="card-text">
            ${createRatingHTML(recipe)}
            ${recipe.Description}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Updated by ${recipe.AuthorName}</small>
        </div>
      </div>
  `
  return cardHTML;
}

/**
 * The function creates HTML code for displaying a star rating based on a recipe's aggregated rating.
 * @param recipe - The recipe object that contains information about a recipe, including its aggregated
 * rating.
 * @returns The function `createRatingHTML` returns a string of HTML code that displays a star rating
 * for a recipe based on its `AggregatedRating` property.
 */
function createRatingHTML(recipe){
  let recipeRating = `<div class="rating-block">`;
  for (let i = 0; i < Math.ceil(recipe.AggregatedRating); i++) {
    recipeRating += `<span class="star text-warning" data-value="${
      i + 1
    }}">&#9733;</span>`;
  }
  for (let i = Math.ceil(recipe.AggregatedRating); i < 5; i++) {
    recipeRating += `<span class="star text-muted" data-value="${
      i + 1
    }}">&#9733;</span>`;
  }
  recipeRating += `</div>`;
  return recipeRating;
}