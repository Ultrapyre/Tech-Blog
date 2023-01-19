const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
})

router.get('/dashboard',  async (req, res) => {})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

module.exports = router;