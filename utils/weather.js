var weather = require("openweather-apis");

const getWeather = (location) => {
  weather.setCoordinate(
    location.latitude || 37.34339904785156,
    location.longitude || 127.12069702148438
  ); //latitude longitude
  weather.setLang("en");
  weather.setUnits("metric");
  weather.setAPPID("628bed54922d20d1ce80a5b2b83a715a");
  return new Promise((resolve, reject) => {
    weather.getWeatherOneCall(function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = { getWeather };
