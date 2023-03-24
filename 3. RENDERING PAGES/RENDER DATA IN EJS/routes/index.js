var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/single', function(req, res, next) {
  res.render('single', { data: 'Hello world' });
});

router.get('/multiple', function(req, res, next) {
  res.render('multiple', { data: ["a","b","c","d","e"] });
});

router.get('/html', function(req, res, next) {
  res.render('html', { data: '<h1>Hello World!</h1>' });
});

module.exports = router;
