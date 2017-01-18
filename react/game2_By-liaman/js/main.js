/**
 * Created by hasee on 2017/1/18.
 */

//解析传参，解析赋值
class GameScene {
    constructor (){
        this.myPlane = null;//自己的飞机
        this.enemys = []; //敌机
        this.bullets = []; //子弹
        this.source = {};
        this.bg = {x:0,y:0};
        this.init()
    }
    init(){
        //获取设备的宽高
        this.getSystemInfo();
        this.createScene();
        //加载资源
        this.loadSource( ()=> {
            console.log("资源加载完成")
            this.drawBg();
            this.drawMyPlane();
            this.run();//让游戏运行起来

        })
    }
    getSystemInfo(){
        this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight;
    }
    createScene(){
        //创建一个canvas
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width; //不需要加px
        this.canvas.height = this.height;
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
    }
    loadSource(callback){
        //枚举
        var size = source.getSize();//要加载的资源的数量;
        var length = 0;
        for(var attr in source){
            //过滤原型属性
            if(source.hasOwnProperty(attr)){
               // console.log(source[attr])
                var oImg = document.createElement("img");
                oImg.src = source[attr]//让img的src等于要加载的图片;

                this.source[attr] = oImg; //把所有的图片保存在 this.source里面
                oImg.onload=function () {
                    length++;
                    //size总共要加载的图片，length当前加载的进度
                   // console.log(size,length)
                    if(size==length){
                        //资源加载完成
                        callback()
                    }
                }

            }

        }

    }
    drawBg(){

        this.context.drawImage(this.source.bg1,0,this.bg.y,this.width,this.height)

        this.context.drawImage(this.source.bg1,0,this.bg.y-this.height,this.width,this.height)
    }
    drawMyPlane(){
        var x = this.width/2-Constant.MYPLANE_W/2;
        var y = this.height-Constant.MYPLANE_H;
        this.myPlane = new MyPlane(this,{
            x:x,
            y:y,
            w:Constant.MYPLANE_W,
            h:Constant.MYPLANE_H,
            img:this.source.myPlane,
            boomImg:this.source.myPlaneBoom
        });
    }
    run(){
        //18毫秒运行一次
        requestAnimationFrame(()=> {
            //每次帧动画，都需要先把之前的画面清除
            this.context.clearRect(0,0,this.width,this.height);
            this.bg.y+=1;
            if(this.bg.y>=this.height){
                this.bg.y=0;
            }

            this.drawBg();
            this.myPlane.draw();
            this.run();
        })
    }
}