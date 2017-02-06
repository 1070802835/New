var http=require("http").createServer(hander);
var io=require("socket.io").listen(8080);
var fs=require("fs");
http.listen(80);
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
var userArr=[];
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
        userArr.push(userId)
    });
});

console.log("ok,8080");