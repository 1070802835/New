
export var module1 = 'm1';
export var module2 = {
	name:'cai',
	showname:function(){
		console.log(this.name)
	}
};
//export 的方式可以设置多个模块的对外端口，但是模块名必须保持一致
//可以写默认暴露出的模块
//module1 和  module2 只是一个变量名而已
var module3 = "m3"

export default module3

var first = 'm6';
var second = 'm7';

//也可以这样暴露接口

export{first,second}
