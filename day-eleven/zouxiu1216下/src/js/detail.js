/**
 * Created by hasee on 2016/12/15.
 */

var detailPage = {
    goodsID:fnBase.request("goodsID"),
    init:function () {
        //先给页面填充数据
        this.addData();
        //给页面元素绑定事件
        this.bindEvent();
        //商品id
    },
    addData:function () {
        $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:this.goodsID},function (data) {
            console.log(data[0]);
            //data[0].imgsUrl 轮播图
            //goodsName
            //price
            //buynumber
            var picList = JSON.parse(data[0].imgsUrl);
            var strPic = "";
            for(var i=0;i<picList.length;i++){
                strPic+='<div class="swiper-slide"><img src="'+picList[i]+'"></div>'
            }
            //填充轮播图的内容
            $("#detail-page .swiper-wrapper").html(strPic);

            //轮播图内容确定以后，再调用js
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                slidesPerView: 3,
                pagination: '.self-pagination',
            });

            $("#detail-page .pro-info").html(
                '<li class="pro-name">'+data[0].goodsName+'</li>' +
                '<li class="pro-price"><em>￥'+data[0].price+'</em><del>￥999</del></li>' +
                '<li class="pro-num">购买人数:'+data[0].buynumber+'</li>'
            )

        })
    },
    bindEvent:function () {
        $("#detail-page .add-cart").on("click",function () {

            var sendData = {"userID":"lining","goodsID":this.goodsID,"number":1};
            $.get("http://datainfo.duapp.com/shopdata/updatecar.php",sendData,function (data) {
                console.log(data)
            },"json")
        }.bind(this))
    }
};

//让页面初始化
detailPage.init();