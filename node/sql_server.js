var http=require('http');
var url=require("url");
var product=require('./api/product');
http.createServer(function (req,res) {
    if(req.url!="/favicon.ico"){
        var urlArr=url.parse(req.url).pathname.split("/");
        console.log(urlArr);
        // product.getList(res,1);
        //product.getDetail(res,2);
        switch (urlArr[1]){
            case "api":
        }
        if(urlArr[1]=="api"){
            //懒得去分割 ws  爱咋地咋地
        }else{

        }


    }
}).listen('8080');
console.log(8080);