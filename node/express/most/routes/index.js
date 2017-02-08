var express = require('express');
var router = express.Router();
var user=require("../models/user");
/* GET home page. */
var tar={
    title: 'Express',
    mark:"Most's World",
    name:'most',
    love:'girl'
};
var listTar={
  name:'listPage',
  mark:"Most's World",
  love:'girl',
    showName:true,
    html:'<a href="/"> 生成的A标签 Go To Index</a>'
};
router.get('/', function(req, res, next) {
  res.render('index', tar);
});
router.get('/list', function(req, res, next) {
  res.render('list', listTar);
});

router.get('/login', function(req, res, next) {
    res.send(req.query);
    console.log(req.query)
});
router.post('/login', function(req, res, next) {
    res.send(req.body.username);
    console.log(req.body.username);
    user.find(req.body.username,function (data) {
        console.log(data);
        if(!data.length){
            res.send("不存在用户名")
        }else if(data[0].password==req.body.password){
            res.send("成功")
        }else{
            res.send("不匹配")
        }

    })
});

module.exports = router;
//想使用路由的话   先要在app.js里面 require 然后 use

//npm start   启动服务
