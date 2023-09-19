const router = require('express').Router();
const {User, BlogPost, Comment }= require('../models');
const withAuth = require('../helpers/auth');

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