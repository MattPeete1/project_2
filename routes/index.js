var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/workouts');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/workouts',
    failureRedirect: '/workouts'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/workouts');
  });
});

module.exports = router;
