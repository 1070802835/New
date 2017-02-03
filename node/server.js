var http=require("http");
http.createServer(function (request,response) {
   response.writeHead("200",{'Content':'text/html;charset=utf-8'});
   response.write("hello");
   response.end();
}).listen("8000");
console.log("server run at http://localhost:8000");