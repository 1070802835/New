var http=require("http");
var url=require("url");
var queryString=require("querystring");
var route=require("./views/routes");
http.createServer(function (request,response) {
    //get
    /*var urlObject=url.parse(request.url,true);
    console.log(urlObject.query);*/
    var urlType=request.url.split("/");
    if(request.url!="/favicon.ico"){
        var postData="";
        request.on("data",function (chunk) {
            postData+=chunk
        });
        request.on("end",function () {
            console.log(postData);
            console.log(queryString.parse(postData))
        });

        if(urlType[1].indexOf(".html")!=-1){
            route.html(urlType[1],response);
        }else if(urlType[1]=="img"){
            route.image(urlType[2],response);
        }else{
            route.html("index.html",response);
        }
    }


   /*if(request.url!="/favicon.ico"){

       if(request.url=="/index.html"){
           route.home(response);
       }else if(request.url=="/login.html"){
           route.login(response);
       }else if(request.url=="/img/MonsterGuardians.jpg"){
           route.image(response);
       }
   }*/
}).listen("8000");
console.log("server run at http://localhost:8000");

