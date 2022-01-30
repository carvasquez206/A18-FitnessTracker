const router = require("express").Router();
const path = require("path");
//request from the index/home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
//request from the stats page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/stats.html"));
});
//request from the exercise page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/exercise.html"));
});
//HTML routes
module.exports = router;