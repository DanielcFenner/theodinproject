const weatherBackground = document.querySelector(".weather-background");
const button = document.querySelector("#submit");
const searchBox = document.querySelector("#searchbox");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feelslike");

async function getCats(weather) {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=qEPMKTctNvSVVSzXEmrEQg8raaEz5ffX&s=" +
      weather,
    { mode: "cors" }
  );
  const catData = await response.json();
  weatherBackground.src = catData.data.images.original.url;
}

async function getWeather(city) {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&APPID=9aa4b29a8708909d5e785d166c1bf2e6",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  title.textContent = weatherData.name;
  description.textContent = weatherData.weather[0].description;
  temp.textContent =
    "Temp: " + Math.round(weatherData.main.temp - 273.15) + " C";
  feelsLike.textContent =
    "Feels Like: " + Math.round(weatherData.main["feels_like"] - 273.15) + " C";
  getCats(weatherData.weather[0].description);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  const city = searchBox.value;
  getWeather(city);
});

getCats();
