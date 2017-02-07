var express = require('express');
var path = require('path');/*node 提供的路径的方法*/
var favicon = require('serve-favicon'); /*favicon*/
var logger = require('morgan');/*日志提示*/
var cookieParser = require('cookie-parser'); //cookie
var bodyParser = require('body-parser'); //entity-body内容的解析

var session = require("express-session");
/*路由*/
var index = require('./routes/index');
var users = require('./routes/users');
var order = require('./routes/order');

var app = express();
// view engine setup
//__dirname 网站根目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  //视图模板引擎的格式

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev')); //日志提示 = morgan
app.use(bodyParser.json()); //解析json
app.use(bodyParser.urlencoded({ extended: false }));//url编码处理
app.use(cookieParser()); //cookie的插件
app.use(express.static(path.join(__dirname, 'public'))); // 网站静态文件的存放位置


/*设置使用session*/
app.use(session({
  secret:"124234",
  name:"name",
  cookie:{maxAge:1000*60*10},
  resave:true,
  saveUninitialized: true
}));


/*路由*/
app.use('/', index);
app.use('/users', users);
app.use('/order', order);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
