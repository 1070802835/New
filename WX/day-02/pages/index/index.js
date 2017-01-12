//index.js  http://xuliangmost.duapp.com/Music&Video/%E7%A8%BB%E9%A6%99.mp4
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: "Most's World",
    motto2: "Most",
    isPlay:true,
    userInfo: {},
    poster1: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1484182908&di=5b8f4b95aa2cf52e0914a54bd5e64606&src=http://p4.music.126.net/a3AHuGr6x4h2L0nbJHTT7A==/2925800442657484.jpg',
    name1: 'I Knew You Were Trouble',
    author1: 'Taylor Swift',
    src1: 'http://xuliangmost.duapp.com/Music&Video/I%20Knew%20You%20Were%20Trouble.mp3',

    poster2: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2939012244,2574329814&fm=21&gp=0.jpg',
    name2: '童话镇',
    author2: '二珂',
    src2: 'http://kangkai.duapp.com/music/%E4%BA%8C%E7%8F%82%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87[%E5%AE%8C%E7%BE%8E%E7%89%88].mp3'
  },

    onReady: function (e) {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio1');
        this.audioCtx = wx.createAudioContext('myAudio2')
    },



  //分享
    onShareAppMessage: function () {
        return {
            title: 'most',
            desc: 'most wx ',
            path: '/page/user?id=123'
        }
    },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  playMusic:function(){
    if(this.data.isPlay){
      wx.playBackgroundAudio({
                  dataUrl: 'http://kangkai.duapp.com/music/%E4%BA%8C%E7%8F%82%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87[%E5%AE%8C%E7%BE%8E%E7%89%88].mp3',
                  title: 'Most',
                  coverImgUrl: ''
      })
    }else{
      wx.pauseBackgroundAudio()
    }
    this.setData({
        isPlay:!this.data.isPlay
      })
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
  },

    //音频控制组件


    audioPlay: function () {
        this.audioCtx.play()
    },
    audioPause: function () {
        this.audioCtx.pause()
    },
    audio14: function () {
        this.audioCtx.seek(14)
    },
    audioStart: function () {
        this.audioCtx.seek(0)
    }



});
