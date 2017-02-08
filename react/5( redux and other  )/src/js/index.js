let demo1=require("./demo1");
// let demo2=require("./demo2");
require("./index.css");
let oDiv1=document.getElementById("div1");
let oDiv2=document.getElementById("div2");
let oDiv3=document.getElementById("div3");
let str="talk is cheap ! show me the code ! ";
oDiv1.innerHTML=str.toLocaleUpperCase();
oDiv2.innerHTML=demo1.son;
//写上这个  require来的文件   也可以实现热替换



import m1 from "./demo2.js"
//在原js文件里面定义 export default  在这里不需要知道接口的名字  但是只能定义一个



import {module1,module2} from "./demo2.js"
//这种方式，需要知道，暴露的接口的名字

console.log(m1);
module1();
module2();

if (module.hot) {
    module.hot.accept();
}
