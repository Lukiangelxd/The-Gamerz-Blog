const router = require('express').Router();
const{ BlogPost, User} = require('../models')

const withAuth = require('../helpers/auth');

router.get('/',withAuth, async(req,res)=> {
    try{

        const blogData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true}));
        res.render('homepage',{blogs} )
    }catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router