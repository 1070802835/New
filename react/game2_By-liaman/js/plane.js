/**
 * Created by hasee on 2017/1/18.
 */


class MyPlane{
    constructor(scene,options){
        this.scene = scene; //保存场景
        this.options = options;
        this.init()
    }
    init(){
        this.draw()
    }
    draw(){
        var opt = this.options;
        //通过场景的context绘制飞机
        this.scene.context.drawImage(opt.img,opt.x,opt.y,opt.w,opt.h)
    }
    toMove(){
        console.log(this.options.y);
        this.options.y-=1;
        console.log(this.options.y);
        this.draw()
    }
}