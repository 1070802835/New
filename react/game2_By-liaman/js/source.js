const  source = {
    "start":"source/start.png",
    "bg1":"source/background_1.png",
    "bullet1":"source/bullet1.png",
    "myPlane":"source/myplane.gif",
    "myPlaneBoom":"source/myplane_boom.gif",
    "enemy1Fly1":"source/enemy1_fly_1.png",
    "enemy1Fly2":"source/enemy1_fly_2.gif",
    "enemy2Fly1":"source/enemy2_fly_1.png",
    "enemy2Fly2":"source/enemy2_fly_2.png",
    "enemy2Fly3":"source/enemy2_fly_3.gif",
    "enemy3Fly1":"source/enemy3_fly_1.png",
    "enemy3Fly2":"source/enemy3_fly_2.png",
    "enemy3Fly3":"source/enemy3_fly_3.gif"

};

Object.prototype.getSize = function() {
    var size = 0, key;
    for (key in this) {
        if (this.hasOwnProperty(key)) size++;
    }
    //hasOwnProperty 判断 是不是本身属性
   return size
};
console.log(source.getSize())
