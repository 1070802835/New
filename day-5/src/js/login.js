var $length = $("footer .icon").width();
        $("footer .icon").css({"height":$length});
        $("input[type!='button']").focus(function () {
            $("aside").attr("class","aside_static");
        }).blur(function () {
            $("aside").attr("class","aside_fixed");
        });
      /*  $(document).click(function () {
            if($("aside").attr("class") !== "fixed"){
                $("aside").attr("class","aside_fixed");
            }
        })*/
      /*document.addEventListener("keydown",function (e) {
//              alert(e.keyCode);
      },false);*/

      /*  虚拟键盘判断???  */



/*  login  */

var userData = null;
/*  ajax获取数据，可传参：回调函数  */

function getData(callback) {
    var url = "../dist/json/userdata.json";
    var settings = {
        dataType: "json",
        success: function (data) {
            userData = data;
            console.log(userData);
        },
        complete:function () {
            if(callback){callback()}
        }
    };
    $.ajax(url,settings);
}
/*  检查用户名是否存在，存在返回true和下标,不存在返回false  */

function check() {
    console.log(userData);
    var uName = $("#uName").val();
    var isExist = false;
    var index = 0;
    if(userData){
        for( var i = 0; i < userData.length; i++){
            if( userData[i].uName == uName){
                isExist = true;
                index = i;
                break;
            }
        }
    }
    if(isExist){
        return {isExist:true, index:index};
    }else{
        return {isExist:false};
    }
}

$("#uName").blur(function () {
    getData(test);
    console.log(check().isExist);
    function test() {
        if(!(check().isExist)){
            alert("用户名不存在");
        }
    }
});

$("#login").click(function () {
    getData(log);
    function log() {
        if(check().isExist){
            var uPwd = $("#pwd").val();
            var thisIndex = check().index;
            /*console.log(thisIndex);
            console.log(uPwd);
            console.log(userData[thisIndex].uPwd);*/
            if(userData[thisIndex].uPwd == uPwd){
                alert("登陆成功");
            }else{
                alert("密码不正确");
            }
        }
    }
});
