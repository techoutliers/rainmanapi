var express = require("express");
const { getLocationWithIp, weather } = require("../utils");
const { getWeather } = require("../utils/weather");
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
    res.status(200).send(currentweather);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
