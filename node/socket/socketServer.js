var http=require("http").createServer(hander);
var io=require("socket.io").listen(8181);//避免端口占用
var fs=require("fs");
http.listen(80);//80是默认的端口，占用就改掉
function hander(req,res) {
    if(req.url=="/"){
        fs.readFile("./socket.html",function (err,data) {
            res.write(data);
            res.end()
        })
    }else if(req.url=="/socket.io.js"){
        fs.readFile("./socket.io.js",function (err,data) {
            res.write(data);
            res.end()
        })
    }else if(req.url=="/socket.html"){
        fs.readFile("./socket.html",function (err,data) {
            res.write(data);
            res.end()
        })
    }
}
var userArr={};
var userId=1;
//当有人链接的时候
io.on("connection",function (socket) {
    //socket就是链接的对象
    console.log("链接上了");
    socket.name="用户 "+ userId++;
    socket.on("message",function (data) {
        if(data){
            console.log(data)
        }
        socket.broadcast.send(socket.name+" : "+data);
        // userArr[socket.name]=        //通过ip来判断是否设置过用户名
    });
});

console.log("ok,8181");