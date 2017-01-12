// pages/list/list.js
Page({
  data:{
      title:"列表",
      button:"点我点我",
      flag:true,
      listData:[],
      duration:800,
      autoplay:false,
      indicator:true,
      current:0,//上面的current
      current1:0,
      windowWidth:0,
      scrollLeft:0
  },
    changeCurrent:function (e) {
        this.setData({
            current:e.currentTarget.dataset.id
        })
    },
    changeCurrent1:function () {
        this.setData({
            current1:0
        })
    },
    changeCurrent2:function () {
        this.setData({
            current1:1
        })
    },

    bindchange:function (ev) {
      this.setData({
          current:ev.detail.current,
          scrollLeft:ev.detail.current*86-(this.data.windowWidth/2)+43
      });

    },
    bindchange2:function (ev) {
      console.log(ev.detail.current);
        this.setData({
            current1:ev.detail.current
        })
    },
    isindicator:function () {
        this.setData({
            indicator:!this.data.indicator
        })
    },
  onLoad:function(options){
      var that=this;
    // 页面初始化 options为页面跳转所带来的参数
      wx.getSystemInfo({
          success: function(res) {
              that.setData({
                  windowWidth:res.windowWidth
              })
          }
      });

      wx.request({
          url: 'https://xuliangmost.duapp.com/json/listData.json',
          data: {},
          method: 'GET',
          success: function(res){
              that.setData({
                  listData:res.data.list
              });
          }
      })
  },
    navigateTo:function (ev) {
        var id=ev.currentTarget.dataset.id*1+1;
        wx.navigateTo({
            url: '../detail/detail?id='+id
        })
    },

  changeFlag:function(){
    this.setData({
      flag:!this.data.flag
    })
  },
  listTap:function(ev){
    console.log(ev.target);
    console.log(ev.target.id)
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
  },

    //scroll
    upper: function(e) {
        console.log("bindscrolltoupper")
    },
    lower: function(e) {
        console.log("bindscrolltolower")
    }
});