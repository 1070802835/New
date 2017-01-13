// pages/upload/upload.js
Page({
  data:{
    urlList:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
    upload:function () {
        var that=this;
        wx.chooseImage({
            success: function(res) {
                var tempFilePaths = res.tempFilePaths;
                wx.uploadFile({
                    url: 'https://xuliangmost.duapp.com/upload/upload.php', //仅为示例，非真实的接口地址
                    filePath: tempFilePaths[0],
                    name: 'file',
                    success: function(res){
                      console.log(res)
                        var data = res.data.replace(/\s/g,"");

                        that.setData({
                          url:that.data.urlList.push(data)
                        });

                        //do something
                    }
                })
            }
        })
    },
    download:function () {
        wx.downloadFile({
            url: this.data.url, //仅为示例，并非真实的资源
            success: function(res) {
                wx.playVoice({
                    filePath: res.tempFilePath
                })
            }
        })
    }
});