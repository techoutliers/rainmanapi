var express = require("express");
const { getLocationWithIp, weather, constants } = require("../utils");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/weather", async (req, res, next) => {
  try {
    var ip = req.headers["x-real-ip"];
    let location = await getLocationWithIp(ip);
    let currentweather = await weather.getWeather({
      latitude: location.latitude,
      longitude: location.longitude,
    });
    let number = 3;
    if (
      currentweather &&
      currentweather.current &&
      currentweather.current.weather &&
      currentweather.current.weather.length > 0 &&
      currentweather.current.weather[0].main
    ) {
      constants.weatherTypes[currentweather.current.weather[0].main];
    }
    res.status(200).send({ code: number });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
