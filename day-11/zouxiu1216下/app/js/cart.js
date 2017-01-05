/**
 * Created by hasee on 2016/12/15.
 */
var cartPage = {
    list:$("#cart-page .cart-list"),
    init:function () {

        //先给页面填充数据
        this.addData();
        //给页面元素绑定事件
        this.bindEvent()

    },
    addData:function () {
        $.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{"userID":"lining"},function (data) {
            console.log(data);

            var str = ""; //用来接受购物车的数据
            for(var i=0;i<data.length;i++){
                str+='<li class="cart-item" data-id="'+data[i].goodsID+'">' +
                        '<a href="###" class="pic"><img src="'+data[i].goodsListImg+'"></a>' +
                        '<div class="pro-info">' +
                            '<p class="pro-name">'+data[i].goodsName+'</p>' +
                            '<p class="price">金额：<em>￥'+data[i].price+'</em></p>' +
                            '<div class="num-wrap">' +
                                '<span class="num-tit">数量：</span>' +
                                '<div class="num-box">' +
                                    '<span class="num-btn minus cart-btn">-</span>' +
                                    '<input class="num-val" type="text" value="'+data[i].number+'" />' +
                                    '<span class="num-btn plus cart-btn">+</span>' +
                                '</div>' +
                            '</div>' +
                        ' </div>' +
                        '<a href="javascript:;" class="delete-btn  cart-btn">x</a>' +
                    '</li>'
            }

            this.list.html(str);

            //获取数量和金额总和
            this.getSum()
        }.bind(this))
    },
    bindEvent:function () {
        var that = this;
        this.list.on("click",".cart-btn",function () {
            var oLi = $(this).parents(".cart-item");
            var id = oLi.attr("data-id"); //商品的id
            var oLiNum = oLi.find(".num-val");//获取当前li里面的商品数量的input
            var number = parseInt(oLiNum.val())//商品数量
            //userID =  lining
            //number

            console.log(id);
            console.log(number);
            if($(this).hasClass("minus")){
                number--;
                oLiNum.val(number);
                console.log("-")
            }else if($(this).hasClass("plus")) {
                number++;
                oLiNum.val(number);
                console.log("+")
            }else {
                number=0;
                //删除
                oLi.remove();
                console.log("delete")
            }
            //获取数量和金额总和
            that.getSum();

            //后台数据请求
            var sendData = {"userID":"lining","goodsID":id,"number":number};
            $.get("http://datainfo.duapp.com/shopdata/updatecar.php",sendData,function (data) {
                console.log(data)
            },"json")
        })
    },
    getSum:function () {
        //获取数量和金额总和
        //把所有的商品循环，数量和金额累加
    }
};

//让页面初始化
cartPage.init();