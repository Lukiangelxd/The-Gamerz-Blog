const router = require("express").Router();
const homeRoute = require("./homePage");
const apiRoutes = require("./api");
const htmlRoutes = require("./htmlRoutes");

router.use("/", homeRoute);
router.use("/api", apiRoutes);
router.use("/games", htmlRoutes);

module.exports = router;
