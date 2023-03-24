var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("get Request")
});

router.get('/send', function(req, res, next) {
  res.send("This is a send Response")
});

router.get('/render', function(req, res, next) {
  res.redirect("index")
});

router.get('/redirect', function(req, res, next) {
  res.redirect("/send")
});

router.get('/json', function(req, res, next) {
  res.json({"type":"json","string":"anything","number":123456,"boolean":true})
});


module.exports = router;
