var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Naga' });
});

// get and render about page
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About Me'
  });
});

// get and render projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', {
    title: 'Projects'
  });
});

// get and render services page
router.get('/services', function(req, res, next) {
  res.render('services', {
    title: 'Services'
  });
});

// get and render contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact Me'
  });
});


module.exports = router;
