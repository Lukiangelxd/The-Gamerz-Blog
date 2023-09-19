const router = require('express').Router();
const {User, BlogPost, Comment }= require('../models');
const withAuth = require('../helpers/auth');
//sends blogs and comments for playstation
router.get('/playstation', withAuth, async(req, res) => {
    try{
        const blogData = await BlogPost.findAll({
            where: {platform_id: 3},
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes: ['comment','user_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['name']
                        }
                    ]
                }
            ]
        });
        const blogs = blogData.map((blog) => blog.get({plain: true}))

        res.render('playstat',{blogs})

    }catch(err) {
        res.status(500).json(err)
    }
})
//same as previous except for xbox
router.get('/xbox', withAuth, async(req, res) => {
    try{
        const blogData = await BlogPost.findAll({
            where: {platform_id: 4},
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes: ['comment','user_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['name']
                        }
                    ]
                }
            ]
        });
        const blogs = blogData.map((blog) => blog.get({plain: true}))

        res.render('xbox',{blogs})

    }catch(err) {
        res.status(500).json(err)
    }
})
//^^
router.get('/pcgaming', withAuth, async(req, res) => {
    try{
        const blogData = await BlogPost.findAll({
            where: {platform_id: 2},
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes: ['comment','user_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['name']
                        }
                    ]
                }
            ]
        });
        const blogs = blogData.map((blog) => blog.get({plain: true}))

        res.render('pcgaming',{blogs})

    }catch(err) {
        res.status(500).json(err)
    }
})
//^^
router.get('/nintendo',withAuth, async(req, res) => {
    try{
        const blogData = await BlogPost.findAll({
            where: {platform_id: 1},
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes: ['comment','user_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['name']
                        }
                    ]
                }
            ]
        });
        const blogs = blogData.map((blog) => blog.get({plain: true}))
        res.render('nintendo',{blogs})

    }catch(err) {
        res.status(500).json(err)
    }
});
//gets lone blog post
router.get('/nintendo/:id', withAuth, async(req, res) => {
    try{
        const blogData = await BlogPost.findByPk(req.params.id, {
            where: {platform_id: 1},
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes: ['comment']
                }
            ]
        });
        const blog = blogData.get({plain: true})

        res.render('blog',{blog})

    }catch(err) {
        res.status(500).json(err)
    }
});
//single blog post
router.get('/pcgaming/:id', withAuth, async(req, res) => {
    try{
        const blogData = await BlogPost.findByPk(req.params.id, {
            where: {platform_id: 2},
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes: ['comment']
                }
            ]
        });
        const blog = blogData.get({plain: true})

        res.render('blog',{blog})

    }catch(err) {
        res.status(500).json(err)
    }
});
//single blogpost
router.get('/playstation/:id', withAuth, async(req, res) => {
    try{
        const blogData = await BlogPost.findByPk(req.params.id, {
            where: {platform_id: 3},
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes: ['comment']
                }
            ]
        });
        const blog = blogData.get({plain: true})

        res.render('blog',{blog})

    }catch(err) {
        res.status(500).json(err)
    }
});
//single blogpost
router.get('/xbox/:id', withAuth, async(req, res) => {
    try{
        const blogData = await BlogPost.findByPk(req.params.id, {
            where: {platform_id: 4},
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes: ['comment']
                }
            ]
        });
        const blog = blogData.get({plain: true})

        res.render('blog',{blog})

    }catch(err) {
        res.status(500).json(err)
    }
});


module.exports= router