var pool=require("./database");
var user={
    find:function (username,callback) {
        pool.getconnection(function (err,connection) {
            if(err){
                console.log("log" + err)
            }
            connection.query("select * from user where username='" + username+"'",function (err,result) {
                callback(result);
                //数据库操作完成后 ，是否连接
                connection.release();

            })
        })
    }
};
module.exports=user;