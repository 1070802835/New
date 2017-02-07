var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("I'm order");
});
router.get('/login', function(req, res, next) {
  console.log(req.query)
});
router.post('/login', function(req, res, next) {
    console.log(req.body)
});
module.exports = router;
