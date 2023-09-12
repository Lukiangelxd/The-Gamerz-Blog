const router = require("express").Router();
// Bring in proper model for each gaming route
// Impliment authroization
router.get("/nintendo", (req, res) => {
  res.render("nintendo");
});

module.exports = router;
