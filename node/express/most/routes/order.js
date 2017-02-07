var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("I'm order");
});
router.get('/detail', function(req, res, next) {
  //浏览器地址栏   localhost:8000/order/detail
    res.send("I'm order detail");
});
router.get('/detail/1', function(req, res, next) {
    //浏览器地址栏   localhost:8000/order/detail
    res.send("I'm order detail 1");
});
module.exports = router;
