var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('order');
});

/*router.get('/list', function(req, res, next) {
  res.send('order list');
});

router.get('/list/1', function(req, res, next) {
  res.send('order list 1');
});*/

module.exports = router;
