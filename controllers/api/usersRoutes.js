const router = require('express').Router();
const { User } = require('../../models');
//route to login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
//route to create new user
router.post('/signup', async (req, res )=> {
    try {
      const{name,email,password}=req.body
      const userData = await User.create({
        name: name,
        password: password,
        email: email
      });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    })
      } catch (err) {
        res.status(400).json(err);
      };
})

// Delete Route to remove a User.
router.delete('/:user_id', (req, res) =>{
  if(req.params.user_id === req.session.user_id) {
   User.destroy({
     where: {
       user_id: req.params.user_id
     }
   })
   .then((deletedUser) => {
     res.json(deletedUser);
   })
   .catch((err) => res.json(err));
   }
   else{
    res.status(400).json("Error! Can not delete another user!");
   };
})
//destroys session when signout is clicked
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
