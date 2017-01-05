import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"

import {Header,Content,Footer} from "./components/common"

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
            bottomArr:["全部","待付款","待发货","待收获","待评价"]
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
                            return <li className={index==this.state.hasBottom?"active":""} key={index} onClick={this.changeOrder.bind(this,index)} ><a href="javascript">{ ele }</a> </li>
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
        this.state={
          type:0
        };
        Action.on("selectType",function (index) {
            this.setState({
                type:index
            })
        }.bind(this))
    }
    render(){
        console.log(this.state.type);
        return(
            <ul className="productList">
                <li>
                    <img className="productList_img" src="" alt=""/>
                    <p className="productList_p1">好事达事达事达电多少钱的期望地区稳定脑桌，桌子的核武器和定期维护队前往或丢弃环卫工粉刺去户</p>
                    <div>
                        <p>0.01</p>
                        <p>*1</p>
                    </div>
                </li>
            </ul>
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
                <Content>
                    <OrderContent/>
                    <ProList/>
                </Content>
                <Footer/>
            </div>
        )
    }
}

















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
        this.state={
            list:[
                    {
                        "src":"http://xuliangmost.com/html/static/dist/img/list-img/monster1.jpg",
                        "parductName":"Monster Guardians粉色弹力裤",
                        "price":"98.00",
                        "size":"xl",
                        "color":"红色",
                        "count":"2",
                        "id":"1"
                    },
                {
                    "src":"http://xuliangmost.com/html/static/dist/img/list-img/monster1.jpg",
                    "parductName":"Monster Guardians粉色弹力裤",
                    "price":"98.00",
                    "size":"xl",
                    "color":"红色",
                    "count":"2",
                    "id":"1"
                },
                {
                    "src":"http://xuliangmost.com/html/static/dist/img/list-img/monster1.jpg",
                    "parductName":"Monster Guardians粉色弹力裤",
                    "price":"98.00",
                    "size":"xl",
                    "color":"红色",
                    "count":"2",
                    "id":"1"
                },{
                    "src":"http://xuliangmost.com/html/static/dist/img/list-img/monster1.jpg",
                    "parductName":"Monster Guardians粉色弹力裤",
                    "price":"98.00",
                    "size":"xl",
                    "color":"红色",
                    "count":"2",
                    "id":"1"
                }

                 ]
        }
    }
    componentWillMount(){
        this.count=0;
        this.totalAmount=0;
        this.yunFei=0;

        this.state.list.map((ele)=>{
            this.count+= ele.count*1;
            this.totalAmount+=ele.price*1
        });
        this.allMoney=this.yunFei+this.totalAmount
    }
    pushOrder(){

    }
    render(){
        console.log(this.count);
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
                                    <img className="productList_img" src={ele.src} alt=""/>
                                    <p className="productList_p1">{ele.parductName}</p>
                                    <div>
                                        <p>{ele.price}</p>
                                        <p>*{ele.count}</p>
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









ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={SureOrder}/>
            <Route path="/orderPage" component={OrderPage}/>
        </Router>
    ), document.getElementById('order'));




export {OrderPage,SureOrder}

if (module.hot) {
    module.hot.accept();
}