var fs = require("fs");
module.exports = {
    readFile:function(url,response){
        fs.readFile(url,function(err,data){
            response.write(data);
            response.end();	//end要写在这里，如果写在fs-server因为异步调用后会立刻执行end
        })
    },
    readFileSync:function(response){
        var data = fs.readFileSync(url);
        response.write(data);
        response.end()
    },
    writeFile:function(response){
        fs.writeFile(url,"hello fs.write",function(err){
            response.write("write successful");
            response.end()
        })
    },
    readImages:function (url,response) {
        response.writeHead("200",{"Content-Type":"image/jpeg"});
        fs.readFile(url,"binary",function (err,data) {
            response.write(data,"binary");
            response.end()
        })
    }
};