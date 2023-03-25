var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/form-data', function(req, res, next) {
  console.log(req.body)
  console.log(req.body.name)
  console.log(req.body.age)
});

module.exports = router;
