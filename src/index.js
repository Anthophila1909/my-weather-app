function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let city = document.querySelector("#city-input");
  city.innerHTML = searchInput.value;
}

let searchFormInput = document.querySelector("#search-form");
searchFormInput.addEventListener("submit", enterCity);
