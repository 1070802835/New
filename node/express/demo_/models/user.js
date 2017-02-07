/**
 * Created by hasee on 2017/2/7.
 */

//引用连接池
var pool = require("./database");

//创建user数据操作对象
var user = {
    //查询操作
    find:function (username,callback) {
        //数据库连接，查询用户
        pool.getConnection(function (err,connection) {
            if(err){
                console.log("log:　"+err)
            }
            //console.log("select * from user where username='"+username+"'")
            //通过username查找数据
            connection.query("select * from user where username='"+username+"'",function (err,results) {
                //把返回的结果给callback
                callback(results)
                //数据库操作完成以后，是否连接
                connection.release();
            })
        })
    }
};

module.exports = user;