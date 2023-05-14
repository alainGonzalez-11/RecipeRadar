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
    const recipe = retrieveRecipe();
    const recipeBoard = document.querySelector("#recipe-board");
    const sideBoard = document.querySelector("#side-board");
    renderRecipe(recipe, recipeBoard);
    renderSide(recipe, sideBoard);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/**
 * The function retrieves a recipe from a recipe book based on a stored recipe ID using ES6 syntax.
 */
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
  const foundRecipe = recipeBook.find(
    (recipe) => recipe.RecipeId === recipeIdToFind
  );
  return foundRecipe;
}

/**
 * The function renders a recipe HTML template with various sections such as tags, ingredients,
 * metadata, instructions, and author information.
 * @param recipe - The recipe object that contains all the information about the recipe, such as name,
 * description, ingredients, instructions, author name, date published, and images.
 * @param recipeBoard - The HTML element where the recipe will be rendered.
 */
function renderRecipe(recipe, recipeBoard) {
  const recipeTags = createTagsHTML(recipe);
  const recipeIngredients = createIngredientsHTML(recipe);
  const recipeMetadata = createMetadataHTML(recipe);
  const recipeInstructions = createInstructionsHTML(recipe);
  let recipeHTML = `
        <img
          src="${recipe.Images[0]}"
          class="card-img-top"
          alt="card-group-image"
          onerror="handleImageError()"
        />

        <div class="card-body">
          <h2 class="card-title">${recipe.Name}</h2>
          <hr>
          <div class="card-text">
            <p id="description" class="lead mb-3 mt-3 text-justify">
              ${recipe.Description}
            </p>
            <div class='p-2'>
            ${recipeTags}
            </div>

            <div class="row">
              <aside class="w-50">
                <h3>Ingredients</h3>
                ${recipeIngredients}



              </aside>
              <aside class="w-50 card">
                <table class="table table-borderless">
                  ${recipeMetadata}
                  
                </table>
              </aside>
            </div>
          </div>
        </div>
        <h3>Recipe instructions</h3>
        ${recipeInstructions}

        <div class="card-footer">
          <small class="text-muted">Published by ${recipe.AuthorName} on ${recipe.DatePublished}</small>
        </div>
  `;

  recipeBoard.innerHTML = recipeHTML;
}

/**
 * The function creates HTML code for displaying tags associated with a recipe.
 * @param recipe - The parameter "recipe" is an object that contains information about a recipe,
 * including an array of keywords.
 * @returns The function `createTagsHTML` returns a string of HTML code that creates a div element with
 * id "tags" and a series of buttons with class "btn btn-dark btn-fit-content", each containing a
 * keyword from the `recipe.Keywords` array.
 */
function createTagsHTML(recipe) {
  let tagsHTML = `<div id="tags" class="mb-5"> `;

  for (let i = 0; i < recipe.Keywords.length; i++) {
    tagsHTML += `
              <button type="button" class="btn btn-dark btn-fit-content">
                ${recipe.Keywords[i]}
              </button>
    `;
  }
  tagsHTML += `</>`;
  return tagsHTML;
}

/**
 * The function creates an HTML list of ingredients for a given recipe object.
 * @param recipe - The recipe object that contains information about a recipe, including its
 * ingredients.
 * @returns The function `createIngredientsHTML` returns a string of HTML code that contains an
 * unordered list (`<ul>`) of ingredients for a recipe. Each ingredient is represented as a list item
 * (`<li>`) with the quantity and part of the ingredient.
 */
function createIngredientsHTML(recipe) {
  let ingredientsHTML = `<ul>`;
  for (let i = 0; i < recipe.RecipeIngredientParts.length; i++) {
    ingredientsHTML += `<li>${recipe.RecipeIngredientQuantities[i]} ${recipe.RecipeIngredientParts[i]}</li>`;
  }
  ingredientsHTML += `</ul>`;
  return ingredientsHTML;
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

/**
 * The function creates HTML code for displaying metadata information about a recipe.
 * @param recipe - The recipe object that contains information about a recipe, such as its rating,
 * review count, servings, yield, and cooking/preparation times.
 * @returns The function `createMetadataHTML` returns a string of HTML code that displays various
 * metadata information about a recipe, including its rating, review count, servings, yield, and
 * cook/prep/total times.
 */
function createMetadataHTML(recipe) {
  let recipeRating = createRatingHTML(recipe);

  let metadataHTML = `<div c
        <thead>
          <tr>
            <th>Rating</th>
            <th>
              ${recipeRating}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Review Count</th>
            <td>${recipe.ReviewCount}</td>
          </tr>
          <tr>
            <th>Recipe servings</th>
            <td>${recipe.RecipeServings}</td>
          </tr>
          <tr>
            <th>Recipe yield</th>
            <td>${recipe.RecipeYield}</td>
          </tr>
          <tr>
            <th>&#128337 Cook Time</th>
            <td>${recipe.CookTime.slice(2)}</td>
          </tr>
          <tr>
            <th>&#128337 Prep Time</th>
            <td>${recipe.PrepTime.slice(2)}</td>
          </tr>
          <tr>
            <th>&#128337 Total Time</th>
            <td>${recipe.TotalTime.slice(2)}</td>
          </tr>
        </tbody>
  `;
  return metadataHTML;
}

/**
 * The function creates an ordered list of recipe instructions in HTML format.
 * @param recipe - The recipe object that contains an array of RecipeInstructions.
 * @returns a string of HTML code that contains an ordered list (`<ol>`) of the recipe instructions.
 * Each instruction is represented as a list item (`<li>`) with the class "text-justify".
 */
function createInstructionsHTML(recipe) {
  let instructionsHTML = `<ol> `;
  recipe.RecipeInstructions.forEach(step => {
    instructionsHTML += `<li class="text-justify">${step}</li>`;
  });
  instructionsHTML += `</ol>`;
  return instructionsHTML;
}

/**
 * The function renders a side panel for a recipe page, including nutritional facts and related recipe
 * cards.
 * @param recipe - The recipe object that contains information about a specific recipe, such as its
 * category and nutritional facts.
 * @param sideBoard - The HTML element where the rendered side content will be inserted.
 */
function renderSide(recipe, sideBoard){
  let sideHTML = `
      <button type="button" class="btn btn-primary w-100 p-2">
        ${recipe.RecipeCategory}
      </button>

      <div class="card p-2">
          <div class="card-body">
            <h5 class="card-title">Nutritional facts</h5>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th class='p-1 small-text'>Calories</th>
                  <td class='p-1 small-text'>${recipe.Calories}</td>
                </tr>
                <tr>
                  <th class='p-1 small-text'>Fat Content</th>
                  <td class='p-1 small-text'>${recipe.FatContent}</td>
                </tr>
                <tr>
                  <th class='p-1 small-text'>Saturated Fat Content</th>
                  <td class='p-1 small-text'>${recipe.SaturatedFatContent}</td>
                </tr>
                <tr>
                  <th class='p-1 small-text'>Cholesterol Content</th>
                  <td class='p-1 small-text'>${recipe.CholesterolContent}</td>
                </tr>
                <tr>
                  <th class='p-1 small-text'>Cholesterol Content</th>
                  <td class='p-1 small-text'>${recipe.SodiumContent}</td>
                </tr>
                <tr>
                  <th class='p-1 small-text'>Carbohydrate Content</th>
                  <td class='p-1 small-text'>${recipe.CarbohydrateContent}</td>
                </tr>
                <tr>
                  <th class='p-1 small-text'>Fiber Content</th>
                  <td class='p-1 small-text'>${recipe.FiberContent}</td>
                </tr>
                <tr>
                  <th class='p-1 small-text'>Sugar Content</th>
                  <td class='p-1 small-text'>${recipe.SugarContent}</td>
                </tr>
                <tr>
                  <th class='p-1 small-text'>Protein Content</th>
                  <td class='p-1 small-text'>${recipe.ProteinContent}</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
  `

  const CATEGORY_TO_FIND = recipe.RecipeCategory;

  const filteredRecipes = recipeBook
  .filter(recipe => recipe.RecipeCategory === CATEGORY_TO_FIND)
  .sort(() => Math.random() - 0.5)
  .slice(0, 5);

  filteredRecipes.forEach(foundRecipe => {
    sideHTML+=createCard(foundRecipe)
  });

  sideBoard.innerHTML = sideHTML;
}


/**
 * The function creates an HTML card element for a recipe with various properties and event listeners.
 * @param recipe - The recipe object that contains information about a recipe, such as its name,
 * description, images, author name, and recipe ID.
 * @returns The function `createCard` returns an HTML string that represents a recipe card with
 * information such as the recipe image, name, rating, description, and author name. The HTML string is
 * generated using the input `recipe` object.
 */
function createCard(recipe) {
  const cardHTML = `
  <div class="
  <div class="card m-4">
    <img
      src="${recipe.Images[0]}"
      onerror="handleImageError()" 
      class="card-img-top clickable-text"
      alt="card-group-image"
      onClick="viewRecipe(${recipe.RecipeId})"
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
 * The function sets a recipe ID in local storage and redirects the user to a recipe page.
 * @param RecipeId - The ID of a recipe that is being passed as a parameter to the function. This ID is
 * then stored in the browser's local storage using the `setItem()` method. The function also logs the
 * stored ID to the console for debugging purposes. Finally, the function redirects the user to a
 * recipe page using
 */
function viewRecipe(RecipeId) {
  localStorage.setItem("RecipeId", RecipeId);
  console.log(localStorage.getItem("RecipeId"));
  window.location.href = "recipe.html";
}


/**
 * The function handles errors that occur when loading an image.
 */
function handleImageError() {
  // Code to handle the error, such as displaying a fallback image or showing an error message
  console.log("Image not found or error occurred");
}
