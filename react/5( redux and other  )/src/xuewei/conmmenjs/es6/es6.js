


//var arr=[];
//for(let i=0; i<10; i++){
//	arr[i]=function(){
//		console.log(i)
//	}
//}
//
//arr[6]();
//
//
//var fn = function(a,b){
//	return a+b;
//}
//
//
//var fn2 = (a,b)=>{
//	return a+b;
//}
//
//var fn3 = (a,b)=>a+b
//
//console.log(fn(2,3))
//console.log(fn2(3,4))
//console.log(fn3(4,5))
//
//
//var [a,b,c] = [1,2,3];
//console.log(a)

//let [a,...b] = [4,5,6]
//console.log(a);
//console.log(...b);
//console.log(b)
//
//function fff(){
//	console.log(arguments)
//}
//fff(...b)//输出的是数组
//
//fff(b)//输出的是数组里面包含数组
//
//
//if(module.hot){
//	module.hot.accept();
//}

//var obj = {
//	name:"couple",
//	showname:function(){
//		return function(){
//			alert(this.name)
//		}.bind(this)
//	}
//}
////箭头函数不改变this的指向
//var obj1 = {
//	name:'couple',
//	showname:function(){
//		return ()=>{
//			alert(this.name)
//		}
//	}
//}
//
//
//obj1.showname()();
//ES 6 里面定义一个类
class Person {
	constructor (name,age){
		this.name=name,
		this.age=age
	}
	showName (){
		alert(this.name)
	}
}
//
//class Student extends Person {
//	constructor (name,age,skill){
//		super(name,age)
//		this.skill = skill
//	}
//	showSkill (){
//		alert(this.skill)
//	}
//}
//
//var student = new Person('xaiohuang',20);
//
//student.showName()
//
//var people = new Student('dahuang',32,'hehe')
//console.log(people)
//
//people.showName()
//people.showSkill()

//加载

//不定参数传递  定义对象

//class Orange extends Person {
//	constructor (skill,...arg){
//		super(...arg);
//		this.skill = skill
//	}
//	showColor (){
//		alert(this.name)
//	}
//}
//
//var org = new Orange("哈哈",'xiao','18')
//console.log(org)





import {module1,module2} from "./m1.js"

console.log(module1) //m1

//console.log(module2)//m2
module2.showname()
//
//这样写的情况下，加载默认暴露的端口
import m4 from './m1.js'
console.log(m4) //m3

import {first,second} from './m1.js'

console.log(first)
