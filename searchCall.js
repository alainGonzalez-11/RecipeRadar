
var form = document.querySelector("#search-form");

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    console.log("red")
  
    const searchField = document.getElementById('search-bar');
  
    localStorage.setItem('search', searchField.value);
    window.location.href = "search.html";
  });