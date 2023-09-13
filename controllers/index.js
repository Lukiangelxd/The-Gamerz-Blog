const router = require('express').Router();
const homeRoute = require('./homePage');
const loginRoute = require('./login');
const blogRoutes = require('./blogs');
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes');

router.use('/blogs', blogRoutes);
router.use('/login', loginRoute);
router.use('/', homeRoute);
router.use('/api', apiRoutes);
router.use('/gaming', htmlRoutes);

module.exports = router;
