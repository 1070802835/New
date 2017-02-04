var mysql=require("mysql");
module.exports={
  getList:function (res,params) {
      var connection=mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'root',
          database:'most',
          port:'3306'
      });
      connection.connect(function (err) {
          if(err){
              console.log("log"+err)
          }else{
              console.log("[connection connect] success")
          }
      });
//
      connection.query("select * from user",function (err,results) {
          console.log(results);
          var data=JSON.stringify(results);
          res.write(data);
          res.end();
      });
//断开链接
      connection.end(function (err) {
          if(err){
              console.log('log'+err)
          }else{
              console.log("[connection end] success")
          }
      });
  },
    getDetail:function (res,params) {
        var connection=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            database:'most',
            port:'3306'
        });
        connection.connect(function (err) {
            if(err){
                console.log("log"+err)
            }else{
                console.log("[connection connect] success")
            }
        });
//
        connection.query("select pid,uid,number from cart where id="+params,function (err,results) {
            console.log(results);
            var data=JSON.stringify(results);
            res.write(data);
            res.end();
        });
//断开链接
        connection.end(function (err) {
            if(err){
                console.log('log'+err)
            }else{
                console.log("[connection end] success")
            }
        });
    }
};