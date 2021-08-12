const API_KEY = process.env.VUE_APP_API_KEY;

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
