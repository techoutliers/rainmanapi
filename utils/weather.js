var weather = require("openweather-apis");

const getWeather = (location) => {
  weather.setCoordinate(
    location.latitude || 37.34339904785156,
    location.longitude || 127.12069702148438
  ); //latitude longitude
  weather.setLang("en");
  weather.setUnits("metric");
  weather.setAPPID("3de27e97b3dbff25be9220916ad15c2b");
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
