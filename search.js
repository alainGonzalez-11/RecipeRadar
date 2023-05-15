let selectedRecipes = [];
/**
 * The function loads a carousel with three random recipes from a JSON file, after validating each
 * recipe.
 * @param recipes - an array of recipe objects, obtained from parsing a JSON file using the Fetch API.
 */
fetch("Resources\\Auxiliar files\\recipes.json")
  .then((response) => response.json())
  .then((recipes) => {
    // Data is now a JavaScript object
    discoverRecipes(recipes);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function discoverRecipes(recipes) {
  const KEYWORD = localStorage.getItem("search");

  const matchingRecipes = recipes.filter((recipe) => {
    const recipeName = recipe.Name.toLowerCase();
    const recipeCategory = recipe.RecipeCategory.toLowerCase();
    const lowerCaseKeyword = KEYWORD.toLowerCase();

    return (
      recipeName.includes(lowerCaseKeyword) ||
      recipeCategory.includes(lowerCaseKeyword)
    );
  });
  selectedRecipes = matchingRecipes;
  showRecipes(matchingRecipes);
}

function showRecipes(matchingRecipes) {
  let recipesHTML = `
    <div class="d-flex flex-wrap">
    `;
  matchingRecipes.forEach((recipe) => {
    recipesHTML += createCard(recipe);
  });
  recipesHTML += `
    </div>
    `;
  document.getElementById("recipe-cards").innerHTML = recipesHTML;
}

function createCard(recipe) {
  const cardHTML = `
        <div class="card col-sm-6 col-md-4 col-lg-3 p-2">
          <img
            src="${recipe.Images[0]}"
            class="card-img-top image-crop-card clickable-text"
            alt="card-group-image"
            onClick="viewRecipe(${recipe.RecipeId})"
            onerror="handleImageError()" 
          />
          <div class="card-body">
            <h5 class="card-title clickable-text" onClick="viewRecipe(${
              recipe.RecipeId
            })">${recipe.Name}</h5>
            <p class="card-text">
              ${createRatingHTML(recipe)}
              ${recipe.Description}
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Updated by ${recipe.AuthorName}</small>
          </div>
        </div>
    `;
  return cardHTML;
}

/**
 * The function creates HTML code for displaying a star rating based on a recipe's aggregated rating.
 * @param recipe - The recipe object that contains information about a recipe, including its aggregated
 * rating.
 * @returns The function `createRatingHTML` returns a string of HTML code that displays a star rating
 * for a recipe based on its `AggregatedRating` property.
 */
function createRatingHTML(recipe) {
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

/**
 * The function handles errors that occur when loading an image.
 */
function handleImageError() {
  // Code to handle the error, such as displaying a fallback image or showing an error message
  console.log("Image not found or error occurred");
}

function filter() {
  let reviewOptions = [];
  const stars5 = document.getElementById("stars5");
  const stars4 = document.getElementById("stars4");
  const stars3 = document.getElementById("stars3");
  const stars2 = document.getElementById("stars2");
  const stars1 = document.getElementById("stars1");

  if (stars5.checked) {
    reviewOptions.push("5");
    reviewOptions.push("4.5");
  }
  if (stars4.checked) {
    reviewOptions.push("4");
    reviewOptions.push("3.5");
  }
  if (stars3.checked) {
    reviewOptions.push("3");
    reviewOptions.push("2.5");
  }
  if (stars2.checked) {
    reviewOptions.push("2");
    reviewOptions.push("1.5");
  }
  if (stars1.checked) {
    reviewOptions.push("1");
    reviewOptions.push("0.5");
    reviewOptions.push("0");
    reviewOptions.push("NA");
  }
  if (
    !stars1.checked &&
    !stars2.checked &&
    !stars3.checked &&
    !stars4.checked &&
    !stars5.checked
  ) {
    reviewOptions = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5", "NA"]
  }

  const matchingRecipes = selectedRecipes.filter((recipe) => {
    const recipeReview = recipe.AggregatedRating;
    console.log(recipeReview);
    return reviewOptions.includes(recipeReview);
  });
  showRecipes(matchingRecipes);
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