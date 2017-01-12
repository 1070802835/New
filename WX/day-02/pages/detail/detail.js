// pages/detail/detail.js
Page({
  data:{
      productUrl:"",
      productName:""
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      var that=this;
      wx.request({
          url: 'https://xuliangmost.duapp.com/json/listData.json',
          data: {},
          method: 'GET',
          success: function(res){
              that.setData({
                  productUrl:res.data.list[options.id*1-1].src,
                  productName:res.data.list[options.id*1-1].parductName
              });
          },
          fail: function() {
              // fail
          },
          complete: function() {
              // complete
          }
      })
  },
    onShareAppMessage: function () {
        return {
            title: 'most',
            desc: 'most wx ',
            path: '/page/user?id=123'
        }
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