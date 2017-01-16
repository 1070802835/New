import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"

import {Header,Content,Footer} from "../components/common"
import Tools from "../tools/tools"

let Action= {
    on: function (name, fn) {
        this[name] = fn
    },
    emit: function (name, data) {
        this[name](data)
    }
};

class OrderContent extends Component{
    constructor(props){
        super(props);
        this.state={
            hasBottom:0,
            bottomArr:["全部","待付款","待发货","待收货","待评价"]
        };
    }
    changeOrder(index){
        this.setState({
            hasBottom:index
        });
        Action.emit.call(Action,"selectType",index);
    }
    render(){
        return(
            <div className="orderContent">
                <ul className="orderContent_top">
                    {
                        this.state.bottomArr.map((ele,index)=>{
                            return <li className={index==this.state.hasBottom?"active":""} key={index} onClick={this.changeOrder.bind(this,index)} ><a href="javascript:;">{ ele }</a> </li>
                        })
                    }
                </ul>

            </div>
        )
    }
}

class ProList extends Component{
    constructor(props){
        super(props);

        let arrList=JSON.parse(localStorage.getItem("orderList"))||[];
        this.state={
            list:arrList,//数组里面是对象
            typeState:0
        };

//这里是选择  全部、未付款之类的

        Action.on("selectType",function (index) {
            let arrList=JSON.parse(localStorage.getItem("orderList"))?JSON.parse(localStorage.getItem("orderList")):[];
            if(index!=0){
                arrList=arrList.filter((ele)=>{
                    return ele.type==index
                });
            }
            this.setState({
                list:arrList,
                typeState:index
            })
        }.bind(this))
    }

    componentDidUpdate(){

    }
    deleteOrder(index){
        let arrList=JSON.parse(localStorage.getItem("orderList"));

        if(index!=0){
            arrList=arrList.filter((ele)=>{
                return ele.orderId!=index
            });
        }
        localStorage.setItem("orderList",JSON.stringify(arrList));
        this.setState({
            list:arrList
        });
        Action.emit.call(Action,"selectType",this.state.typeState);
    }
    render(){
        return(
            <div className="mostOrder">
                {
                    this.state.list.map((ele,index)=>{
                        return(
                            <div key={index} className="onOrder">
                                <ul className="productList">
                                    {
                                        ele.arrList?ele.arrList.map((ele1,index1)=>{
                                                return(
                                                    <li key={index1}>
                                                        <img className="productList_img" src={ele1.goodsListImg} alt=""/>
                                                        <p className="productList_p1">商品{ele1.goodsName}</p>
                                                        <div>
                                                            <p>{ele1.price}</p>
                                                            <p>*{ele1.buynumber}</p>
                                                        </div>
                                                    </li>
                                                )
                                            }):""
                                    }
                                </ul>
                                {
                                    ele.type==1?<div className="noPay">
                                            <p className="noPay_left">待付款</p>
                                            <p className="noPay_mid">立即付款</p>
                                            <p onClick={()=>{this.deleteOrder(ele.orderId)}} className="noPay_right">取消订单</p>

                                        </div>:ele.type==2?<div className="noPay">
                                                <p className="noPay_left">待发货</p>
                                                <p onClick={()=>{alert("提醒发货成功!")}} className="noPay_right">提醒发货</p>

                                            </div>:ele.type==3?<div className="noPay">
                                                    <p className="noPay_left">待收货</p>
                                                    <p onClick={()=>{alert("已收货!")}} className="noPay_right">确认收货</p>

                                                </div>:ele.type==4?<div className="noPay">
                                                        <p className="noPay_left">待评价</p>
                                                        <p onClick={()=>{alert("评价系统版本过低，请升级 ! ")}} className="noPay_right">立即评价</p>

                                                    </div>:""
                                }

                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

class OrderPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="orderPage">
                <Header title="我的订单" hasBack={false} hasRightBtn={false}/>
                <Content hasFooter={true}>
                    <OrderContent/>
                    <ProList/>
                </Content>
                <Footer/>
            </div>
        )
    }
}












//这是确认订单页面




class SureOrder extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header title="确认订单" hasBack={false} hasRightBtn={false}/>
                <Content>
                    <SureContent/>
                    <div className="SureOrder_footer"></div>
                </Content>
            </div>
        )
    }
}

class SureContent extends Component{
    constructor(props){
        super(props);
        let id = Tools.getUserId();
        let cartList = JSON.parse(window.localStorage.getItem("userID"));
        let cartArr = [];
        if(id && cartList){

          for(var i=0; i<cartList.length; i++){
              if(cartList[i].name == id){
                cartArr = cartList[i].list
                break;
              }
          }
        }
        this.count=0;
        this.totalAmount=0;
        this.yunFei=0;
        cartArr.map((ele)=>{
            this.count+= ele.buynumber*1;
            this.totalAmount+=ele.price*1
        });
        this.allMoney=this.yunFei+this.totalAmount;
        this.state={
              list:cartArr||[]

        }

    }
    componentDidMount(){


    }
    pushOrder(){

        let arrList=this.state.list;
        this.obj={
            "arrList":arrList,
            "type":1
        };
        let orderList=[];
        if(localStorage.getItem("orderList")){
            orderList=JSON.parse(localStorage.getItem("orderList"));

            this.obj.orderId=orderList[orderList.length-1]?((orderList[orderList.length-1].orderId)*1+1):1;
            orderList.push(this.obj)
        }else{
            this.obj.orderId=1;
            orderList.push(this.obj)
        }
        console.log(orderList);
        localStorage.setItem("orderList",JSON.stringify(orderList));
        window.location.hash="#/orderPage"
    }
    render(){
  console.log(this.count,this.totalAmount,this.allMoney)
        return(
            <div className="SureContent">
                <div className="SureContent_top">
                    <p>我的天呢&nbsp;&nbsp;&nbsp;
                        <span>电话 : 18610816681</span>
                    </p>
                    <p>Most</p>
                </div>
                <ul className="productList">
                    {
                        this.state.list.map((ele,index)=>{
                            return(
                                <li key={index}>
                                    <img className="productList_img" src={ele.goodsListImg} alt=""/>
                                    <p className="productList_p1">{ele.goodsName}</p>
                                    <div>
                                        <p>{ele.price}</p>
                                        <p>*{ele.buynumber}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="Remarks" >
                    <div className="yunFei">
                        <p>运费 : </p>
                        <p> $ {this.yunFei} </p>
                    </div>
                    <div className="reactMoney">
                        <p>实付款 ( 含运费 ) : </p>
                        <p>{this.allMoney}</p>
                    </div>
                </div>

                <div className="invoice">
                    <p>是否使用发票</p>
                    <form action="">
                        <input id="checkbox" type="checkbox"/>
                        <label htmlFor="checkbox">  </label>
                    </form>
                </div>

                <div className="SureContent_footer">
                    <div>共
                        <span className="SureContent_footer_amount">
                            {this.count}</span>件 , 总金额
                        <span className="SureContent_footer_amount">
                          ${this.totalAmount}
                        </span>
                    </div>
                    <div>
                        <button onClick={()=>{this.pushOrder()}} className="btn1">提交订单</button>
                    </div>
                </div>
            </div>
        )
    }
}








export {OrderPage,SureOrder}

if (module.hot) {
    module.hot.accept();
}
