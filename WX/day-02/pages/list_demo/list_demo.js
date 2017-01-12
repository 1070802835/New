// pages/list/list.js
Page({
      data:{
          title:"demo_list",
          upLoad:true,
          downLoad:true,
          listData:[]
      },
      onLoad:function(options){
          var that=this;
        // 页面初始化 options为页面跳转所带来的参数
          wx.request({
              url: 'https://xuliangmost.duapp.com/json/listData.json',
              data: {},
              method: 'GET',
              success: function(res){
                that.setData({
                    listData:res.data.list
                });
                  console.log(res.data.list);
              }
          })
      },
    navigateTo:function (ev) {
        var id=ev.target.id;
        console.log(id);
        wx.navigateTo({
            url: '../detail/detail?id='+id
        })
    },
    onShareAppMessage: function () {
        return {
            title: 'most',
            desc: 'most wx ',
            path: '/page/user?id=123'
        }
    },
    onPullDownRefresh: function(){
        var that=this;
        that.setData({
            downLoad:false
        });
        console.log(1)
        setTimeout(function () {
            wx.stopPullDownRefresh();
            that.setData({
                downLoad:true
            });
        },2000);
    },
    onReachBottom:function () {
        var that=this;
        that.setData({
            upLoad:false
        });
        setTimeout(function () {
            that.setData({
                upLoad:true
            });
        },2000);
    },
      onReady:function(){
        // 页面渲染完成
      },
      onShow:function(){
        // 页面显示
      },
      onHide:function(){
        // 页面隐藏
      },
      onUnload:function(){
        // 页面关闭
      }
});