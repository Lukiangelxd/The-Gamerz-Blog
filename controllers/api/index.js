const router = require('express').Router();
const userRoutes = require('./usersRoutes');
const blogRoutes = require('./blogsRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
