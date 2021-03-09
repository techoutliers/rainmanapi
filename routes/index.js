var express = require("express");
const { getLocationWithIp } = require("../utils");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/weather", async (req, res, next) => {
  var ip = req.headers["x-real-ip"];
  console.log(await getLocationWithIp(ip));
  res.status(200).send({ body: "Weather" });
});

module.exports = router;
