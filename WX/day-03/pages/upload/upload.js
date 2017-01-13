// pages/upload/upload.js
Page({
  data:{
        urlList:[],
        headerList:["header_1","header_2","header_3"],
        es6Params:{
            title:["footer_1","footer_2","footer_3"],
            detail:["Hah1","Hah2","Hah3"]
        }
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
                    url: 'https://liaman.duapp.com/xiaochengxu/upload.php', //仅为示例，非真实的接口地址
                    filePath: tempFilePaths[0],
                    name: 'file',
                    header: {
                        'content-type':'multipart/form-data'
                    },
                    success: function(res){
                        var data = res.data.replace(/\s/g,"");
                        that.setData({
                          url:that.data.urlList.push(data.split("}}")[1])
                        });
                        console.log(that.data.urlList);
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