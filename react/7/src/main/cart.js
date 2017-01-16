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
                            <p className="price">价格：<em>${ele.price}</em></p>
                            <div className="num-wrap">
                                <span onClick={()=>this.props.changeData(-1,index)}  className="minus num-btn">-</span>
                                <input className="num-val" value={ele.buynumber}/>
                                <span onClick={()=>this.props.changeData(1,index)} className="plus num-btn">+</span>
                            </div>
                        </div>
                        <a className="delete-btn num-btn" onClick={()=>this.props.changeData(0,index)}  href="javascript:void (0);" >删除</a>
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



        // id && $.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:id},(data)=>{
        //     console.log(data)
        //     this.setState({
        //         cartData:data
        //     })
        //     this.getTotal(data)
        // })
    }
    componentDidMount(){
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
      this.setState({
            cartData:cartArr
      })
      this.getTotal(cartArr)


    }
    changeData(type,index){
        let data = this.state.cartData;
        let number = data[index].buynumber;
        if(type){
            number = number*1 + type;
            data[index].buynumber = number;
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
          console.log(data[i].buynumber)
            number += data[i].buynumber*1;
            price += data[i].buynumber * data[i].price
        }
        this.setState({
            pdtSum:number,
            sumPrice:price
        })
    }
    checkOut(){
        var nowID = Tools.getUserId()
        var cartObj = JSON.parse(window.localStorage.getItem("userID"))
        var nowList = []
        console.log(cartObj)
        if(nowID){
              for(var i=0; i<cartObj.length;i++){
                  if(cartObj[i].name == nowID){
                      cartObj[i].list = this.state.cartData;
                      break;
                  }
              }
              window.localStorage.setItem("userID",JSON.stringify(cartObj))
              location.hash = "#/sureOrder"
        }
    }

    render(){
      console.log(this.state.cartData)
        return(
            <div id="cart-page">
                <Header hasBack={true} hasFooter={true} hasRightBtn={true} title="购物车"/>
                <SubHeader>
                    <div className="cart-bar">
                        <p>
                            总数:<span className="total">${this.state.pdtSum}</span>
                            总金额:<span className="total">${this.state.sumPrice}</span>
                        </p>
                        <span className="circle" onClick={()=>this.checkOut()}>结算</span>
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
