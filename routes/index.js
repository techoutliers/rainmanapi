var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/weather", function (req, res, next) {
  var ip = req.headers["x-real-ip"];
  console.log(ip);
  res.status(200).send({ body: "Weather" });
});

module.exports = router;
