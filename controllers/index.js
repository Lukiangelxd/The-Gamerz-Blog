const router = require('express').Router();
const homeRoute = require('./homePage')
const loginRoute = require('./login')
const blogRoutes = require('./blogs')
const apiRoutes = require('./api');

router.use('/blogs', blogRoutes)
router.use('/login', loginRoute)
router.use('/', homeRoute)
router.use('/api', apiRoutes);

module.exports = router;
