/**
 * Created by Administrator on 2017/1/4.
 */
import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Header,Content,Footer} from "../components/common"

import Tools from "../tools/tools"

class CartList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="cart-list">
                {
                    this.props.cartData.map((ele,index)=><li key={index} className="cart-item">
                        <a href="###" className="pic"><img src={ele.goodsListImg} /></a>
                        <div className="info">
                            <p className="p-name">{ele.goodsName}</p>
                            <p className="price"><em>${ele.price}</em></p>
                            <div className="num-wrap">
                                <span onClick={()=>this.props.changeData(-1,index)}  className="minus">-</span>
                                <input type="text" value={ele.number} />
                                <span onClick={()=>this.props.changeData(1,index)} className="plus">+</span>
                            </div>
                        </div>
                        <a className="delete" onClick={()=>this.props.changeData(0,index)}  href="javascript:void (0);" >删除</a>
                    </li>)
                }
            </ul>
        )
    }
}

class SubHeader extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div className="sub-header">{this.props.children}</div>
        )
    }
}

class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            cartData:[],
            pdtSum:0,
            sumPrice:0
        };
        let id = Tools.getUserId();
        id && $.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:id},(data)=>{
            console.log(data)
            this.setState({
                cartData:data
            })
            this.getTotal(data)
        })
    }
    changeData(type,index){
        let data = this.state.cartData;
        let number = data[index].number;
        if(type){
            number = number*1 + type;
            data[index].number = number;
        }else{
            //number一定要清零，一面影响后面总数和总价的计算
            number = 0;
            data.splice(index,1)
        }
        this.setState({
            cartData:data
        });
        this.getTotal(data)
    }
    getTotal(data){
        let number = 0;
        let price = 0;
        for( let i = 0; i < data.length; i++){
            number += data[i].number*1;
            price += data[i].number * data[i].price
        }
        this.setState({
            pdtSum:number,
            sumPrice:price
        })
    }
    checkOut(){
        localStorage.setItem("cartData",JSON.stringify({
            totalNum:this.state.pdtSum,
            totalPrice:this.state.sumPrice,
            pdtInfo:this.state.cartData
        }))
        location.hash = "#/order"
    }

    render(){
        return(
            <div id="cart-page">
                <Header hasFooter={true} hasRightBtn={<div className="circle" onClick={()=>this.checkOut()}>结算</div>} title="购物车"/>
                <SubHeader>
                    <div className="cart-bar">
                        <span>总数:{this.state.pdtSum}</span>
                        <span>总金额:${this.state.sumPrice}</span>
                    </div>
                </SubHeader>
                <Content hasSubHeader={true} hasFooter={true}>
                    <CartList cartData={this.state.cartData} changeData={(type,index)=>this.changeData(type,index)}/>
                </Content>
                <Footer active="2"/>
            </div>
        )
    }
}

export default Cart