const express = require("express");
const authRoutes = require("./authentication.routes");
const movieRoutes = require("./movies.routes");
const reviewRoutes = require("./review.routes");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/movies", movieRoutes);
router.use("/review", reviewRoutes);

router.use("/", (req, res) => {
  res.send("<h1>Welcome to the movie review api</h1>");
});

module.exports = router;
