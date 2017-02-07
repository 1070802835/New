var express = require('express');
var router = express.Router();
var user = require("../models/user"); //用户的数据模块
/* GET home page. */
router.get('/', function(req, res, next) {
  //进入首页的时候，显示session；
  console.log(req.session);
  console.log(req.session.user);

  var data = {
    title: 'Express 1632',
    logined:false,
    username:"a hei",
    html:"<a href='###'>link</a>"
  };
  //如果session里面有user信息，证明登录了，
  if(req.session.user){
    data.logined = true;
    data.username = req.session.user.username; //保存用户名
  }

  res.render('index',data);
});

router.get("/login",function (req, res, next) {
    console.log(req.query);
    res.send("登录 get")
});

router.post("/login",function (req, res, next) {
  console.log(req.body);
  //通过用户的数据模块进行查询
  user.find(req.body.username,function (data) {
    console.log(data)//打印请求的到数据

    //判断返回的数据
    if(!data.length){
      res.send("用户名不存在")
    }else if(data[0].password==req.body.password){

      req.session.user = data[0];
      res.send("登录成功");
      //把用户信息保存在 session = 》session会自动加密保存在cookie里面

    }else {
      res.send("用户名密码不匹配")
    }
  })//查询数据


});



module.exports = router;
