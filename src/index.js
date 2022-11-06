let now = new Date();
let h3 = document.querySelector("h3");
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let curr_hour = now.getHours();
let curr_min = now.getMinutes();

h3.innerHTML = `${day} ${curr_hour}:${curr_min}`;

function showWeather(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temp}°C`;
  let info = response.data.weather[0].main;
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${info}`;
  console.log(response.data);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb9542c65e739e0fb25ade97c749e2aa&units=metric`;
  axios.get(apiWeather).then(showWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showPosition(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eb9542c65e739e0fb25ade97c749e2aa&units=metric`;

  axios.get(apiWeather).then(showWeather);
}

navigator.geolocation.getCurrentPosition(showPosition);