const API_KEY = '8789428acc9f37da5119fe09be97baee';

export const getWeatherByCity = cityName => 
  fetch(
    `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
  ).then(r => r.json());
