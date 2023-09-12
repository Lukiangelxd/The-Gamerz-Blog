const router = require('express').Router();
// Bring in proper model for each gaming route
// Implement authorization to post/comment?
router.get('/nintendo', (req, res) => {
  res.render('nintendo');
});
router.get('/playstat', (req, res) => {
  res.render('playstat');
});
router.get('/pcgaming', (req, res) => {
  res.render('pcgaming');
});
router.get('/xbox', (req, res) => {
  res.render('xbox');
});
module.exports = router;
