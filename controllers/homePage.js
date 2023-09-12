const router = require('express').Router();
const{ BlogPost, User, Comment} = require('../models')
const withAuth = require('../helpers/auth');

//Get Request to access the homepage.
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


//Get Request for the profile page.
router.get('/profile', withAuth, async (req,res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: BlogPost,
                    attributes: ['title', 'post'],
                },
                {
                    model: Comment,
                    attributes: ['comment', 'blog_post_id'],
                }
            ]
        });
        const user = userData.get({ plain: true });
        res.render('homepage',{user});
    }catch (err) {
        res.status(500).json(err)
    };
})

//Get Request for the about page.
router.get("/about", (req, res) => {
    res.render('aboutpage');
  });

  
module.exports = router