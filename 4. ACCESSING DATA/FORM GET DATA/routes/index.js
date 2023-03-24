var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/form-data', function(req, res, next) {
  console.log(req.query)
  console.log(req.query.name)
  console.log(req.query.age)
});

module.exports = router;
