const router = require('express').Router();
const withAuth = require('../../helpers/auth')
const { Comment, BlogPost } = require('../../models');

router.post('/', withAuth, async (req, res)=> {
     try{
        const blogData = await BlogPost.create({
            ...req.body,
        user_id: req.session.user_id});
        res.status(200).json(blogData)

     }catch(err){
        res.status(500).json(err)
     }
});

router.delete(':id', withAuth, async(req, res)=> {
    try {
        const blogData = await BlogPost.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
    
        if (!blogData) {
          res.status(404).json({ message: 'No Blog found with this id!' });
          return;
        }
    
        res.status(200).json(blogData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
router.delete('/comment:id', withAuth, async(req,res)=> {
    try{
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })
        res.status(200).json(commentData)
    }catch(err){
        res.status(500).json(err)
    }
})


router.post('/comment',withAuth, async(req, res)=> {
    try {
        const{ commentText, blog_post_id } =req.body;

        const user_id =req.session.user_id;

        const commentData = await Comment.create({
            comment: commentText,
            user_id,
            blog_post_id,
        });
        res.status(200).json(commentData)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports= router 