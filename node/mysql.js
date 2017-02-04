var mysql=require("mysql");
var http=require('http');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'most',
    port:'3306'
});
http.createServer(function (req,res) {
    if(req.url!="/favicon.ico"){
        /*res.write('mysql');
        res.end();*/
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

    }
}).listen('8080');
console.log(8080);

//链接
/*
connection.connect(function (err) {
    if(err){
        console.log("log"+err)
    }else{
        console.log("[connection connect] success")
    }
});
//
connection.query("select * from user",function (err,results) {
    console.log(results)
});
//断开链接
connection.end(function (err) {
    if(err){
        console.log('log'+err)
    }else{
        console.log("[connection end] success")
    }

});*/
