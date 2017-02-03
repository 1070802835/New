var fs=require("../write/files");
module.exports={

    image:function (url,response) {
        fs.readImages("./img/"+url,response);
    },
    html:function (url,response) {
        if(url.indexOf("?")){
            url=url.split("?")[0]
        }
        fs.readFile("./template/"+url,response);
    }/*,
    home:function (response) {
        fs.readFile("./template/index.html",response);
    },
    login:function (response) {
        fs.readFile("./template/login.html",response);
    }*/
};