function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city-input");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "93tdd4d3b4c2db3bcc87b00foc83ce4a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormInput = document.querySelector("#search-form");
searchFormInput.addEventListener("submit", enterCity);

searchCity("Ulm");
