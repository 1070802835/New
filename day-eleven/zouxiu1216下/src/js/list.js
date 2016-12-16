/**
 * Created by hasee on 2016/12/15.
 */
var listPage = {
    myScroll :null,
    list:$("#list-page .pro-list"),
    classList:$("#list-page .class-list"),
    downText:$("#list-page .down-text"),
    page:0,
    classID:undefined,
    canReload:false,
    init:function () {

        //创建一个iscroll
        this.myScroll = new IScroll("#list-wrapper",{
            scrollbars:true,
            fadeScrollbars:true,
            shrinkScrollbars:"scale",
            bounce:true,
            probeType:1,
            click:true
        });
        //获取商品的分类数据
        this.getClass();
        //先给页面填充数据
        this.addData();
        //给页面元素绑定事件
        this.bindEvent()

    },
    getClass:function () {
      $.get("http://datainfo.duapp.com/shopdata/getclass.php",function (data) {
        console.log(data)
          var str = ""//分类的内容;
          for(var i=0;i<data.length;i++){
              str+='<li class="iconfont" data-id="'+data[i].classID+'">'+data[i].icon+'</li>'
          }

          this.classList.html(str)
      }.bind(this),"json")

    },
    addData:function (reload) {
        if(reload){
            //如果需要刷新，让页面归0
            this.page = 0;
        }

        $("#loading").show();//loading show
        //通过jsonp添加数据
        var sendData = {"classID":this.classID,"pageCode":this.page++,"linenumber":8};
        $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",sendData,function (data) {
            console.log(data);
            var  str = "";
            for(var i=0;i<data.length;i++){
                str+='<li class="pro-item">' +
                        '<a href="detail.html?goodsID='+data[i].goodsID+'" class="pic"><img src="'+data[i].goodsListImg+'"></a>' +
                        '<p class="pro-name">'+data[i].goodsName+'</p>' +
                        '<p class="price"><em>￥'+data[i].price+'</em> <del>￥888</del></p>' +
                    '</li>'
            }
            if(reload){
                //刷新的时候，直接用当前最新的数据，覆盖之前的内容
                this.list.html(str)
            }else {
                //加载的时候，需要跟之前的内容拼接在一起
                this.list.html(this.list.html()+str)
            }
            //当添加完数据以后，内容的高度就改变了，需要更新滚动条
            this.myScroll.refresh()//更新滚动条
            console.log("加载完成");
            //loading hide
            $("#loading").fadeOut();

        }.bind(this));
    },
    bindEvent:function () {
        //给页面元素绑定事件
        var that = this;
        this.myScroll.on("scroll",function(){
            if(this.y>50){
                console.log("刷新");
                that.downText.html("松开刷新");
                that.canReload = true //that.canReload是能不能刷新页面
            }
        });

        this.myScroll.on("scrollEnd",function () {
            //当滚动结束的时候判断是否到，底部
            if(this.y-this.maxScrollY<50){
                console.log("加载更多");

                listPage.addData()
            }
            if(that.canReload){
                //如果需要刷新，就调用刷新的方法
                listPage.addData(true);

                //刷新以后，需要把下拉的提示重置一次
                that.downText.html("拉下刷新");
                that.canReload = false;
            }
            console.log(that.canReload)
        });

        //切换商品分类
        this.classList.on("click","li",function () {

            console.log($(this).attr("data-id"))//点击的分类的id
            that.classID = $(this).attr("data-id");
            that.addData(true)//重新给页面添加数据
        });

        //商品的事件
      /*  this.list.on("click","li",function () {
            console.log("click")
        })*/
    }
};

//让页面初始化
listPage.init();