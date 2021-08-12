const API_KEY = "8789428acc9f37da5119fe09be97baee";

export const getWeatherByCity = (cityName) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
  )
    .then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error("Error in request");
      }
    })
    .catch((error) => {
      console.log(error);
      return "error";
    });
