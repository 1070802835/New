<?php
require_once "sample/php/jssdk.php";
$jssdk = new JSSDK("wx2e6dccf23c8f2f50", "7a93f3dbae9b31b936697ee17d7aff8e");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title> Most </title>
  <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <style type="text/css">
    button{
      display:block;
      width:300px;
      height:50px;
      line-height:50px;
      text-align:center;
      margin:20px auto;
      border:0;
      border-radius:10px;
      background:-webkit-linear-gradient(left,orange,orangered)
    }
    button:focus{
      outline:none;
    }
    button:active{
      opacity:0.8;
    }
    button:hover{
      cursor:pointer;
    }
    .img{
        width:44%;
        margin-left:8px;
        margin-top:8px;
        float:left;
    }
  </style>
</head>
<body>
  <button id="btn1">拍照/图库</button>
  <button id="btn8">预览已存在的图片</button>
  <button id="btn2">扫一扫</button>
  <button id="btn4">获取位置</button>
  <button id="btn3">显示位置</button>
  <button id="btn7">直接显示位置</button>
  <button id="btn6">刷新网页</button>
  <button id="btn5">关闭网页</button>
  <div id="div1"></div>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      "chooseImage","scanQRCode","openLocation","getLocation","closeWindow","previewImage"
    ]
  });
  wx.ready(function () {
    // 在这里调用 API
    var imgArr=[];
    //  "拍照/图库"
    document.getElementById("btn1").onclick=function(){
      wx.chooseImage({
        success: function (res) {
            var localIds = res.localIds;
            imgArr=imgArr.concat(localIds);
            for(var i=0;i<localIds.length;i++){
                var oImg=document.createElement("img");
                oImg.src=localIds[i];
                oImg.setAttribute("class","img")
                document.getElementById("div1").appendChild(oImg);
            }
        }
      });
    }


    document.getElementById("btn8").onclick=function(){
      wx.previewImage({
          current:imgArr[0], // 当前显示图片的http链接
          urls: imgArr // 需要预览的图片http链接列表
      });
    }



    //"扫一扫"
    document.getElementById("btn2").onclick=function(){
      wx.scanQRCode({
          needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
      }
      });
    }


//获取位置
    var latitude,longitude,speed,accuracy;
    document.getElementById("btn4").onclick=function(){
      wx.getLocation({
          type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
              latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
              longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
              speed = res.speed; // 速度，以米/每秒计
              accuracy = res.accuracy; // 位置精度
              alert("纬度 : "+latitude+"经度 : "+longitude+"速度 : "+speed+"位置精度 : "+accuracy)
          }
      });
    }


//显示位置
    document.getElementById("btn3").onclick=function(){
      if(!latitude){
        alert("请先获取位置")
      }else{
          wx.openLocation({
            latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
            longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
            name: '', // 位置名
            address: '', // 地址详情说明
            scale: 16, // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
          });
      }
    }


//直接显示位置
    document.getElementById("btn7").onclick=function(){
          wx.getLocation({
            type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                wx.openLocation({
                    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
                    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
                    name: '', // 位置名
                    address: '', // 地址详情说明
                    scale: 16, // 地图缩放级别,整形值,范围从1~28。默认为最大
                    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                });
            }
        });
    }



//关闭窗口
    document.getElementById("btn5").onclick=function(){
      wx.closeWindow();
    }
    //刷新页面
    document.getElementById("btn6").onclick=function(){
      window.location.reload();
    }



  });
</script>
</html>
