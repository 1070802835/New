import React,{Component} from "react"
import {Footer,Content} from "../components/common.js"
import {Link} from "react-router"
import Tools from "../tools/tools"

import "../css/base/common.css"
import "../css/detial.css"
import "../css/base/swiper-3.4.0.min.css"

class Header extends Component {
    constructor(props){
        super(props)
    }
    onClick(){
        if(this.props.show){
              this.props.showCon(false);
        }else{
            window.location.hash = "#/list"
        }
    }
    render(){
        return (
            <div className="header">
                <ul>
                    <li className="icons" onClick={this.onClick.bind(this)}>
                        {/*{this.props.hasBack?<div className="circle"><a href={()=>window.history.go(-1)}>返回</a></div>:""}*/}
                        {this.props.hasBack?<div className="circle">返回</div>:""}
                    </li>
                    <li className="header-title">{this.props.title}</li>
                    <Link to="/cart">
                        <li className="icons">
                            {this.props.hasRightBtn?<div className="circle">购物车</div>:""}
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}

class DetialPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            detail:[],
            imgUrl:'',
            show:false
        }
        $.get("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{"goodsID":this.props.params.goodsID},(data)=>{
            let detail = data[0].detail
              if(detail.indexOf("；") != -1){
                    detail = detail.split("；")
              }else if(detail.indexOf("。") != -1){
                    detail = detail.split("。")
              }else{
                    detail = detail.split()
              }
            this.setState({
                detail:detail,
                imgUrl:JSON.parse(data[0].goodsBenUrl)
            })

        })
    }

    showCon(show){
      this.setState({
          show:show
      })

    }
    render(){
        return(
            <div id="detialPage">
                <Header show={this.state.show} title="商品详情" hasBack={true} hasRightBtn={true} showCon={this.showCon.bind(this)}/>
                <Content hasFooter={true}>
                    <DetialContent show={this.state.show} ref="contetnShow" showCon={this.showCon.bind(this)} goodsID={this.props.params.goodsID} />
                    <DetialSingle show={this.state.show} ref="singleShow" detailList={this.state.detail||[]} detailUrl={this.state.imgUrl||[]} />
                </Content>
                <Footer />
            </div>
        )
    }
}

class DetialSingle extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={this.props.show?{"display":"block"}:{"display":"none"}} className="detial-sin">
                {
                    this.props.detailUrl.map((ele,index)=>{
                        return <div key={index}><img src={ele}/></div>
                    })
                }

                {
                    this.props.detailList.map((ele,index)=>{
                        return <p key={index}>{ele}</p>
                    })
                }
            </div>
        )
    }
}
class DetialContent extends Component{
    constructor(props){
        super(props)
        this.state={
            goodsList:[],
            imgList:[],
            oldPrice:"",
            newPrice:"",
            discount:"",
            num:""
        }
        $.get("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{"goodsID":this.props.goodsID},(data)=>{
          //  console.log(data[0])
            this.setState({
                goodsList:data[0],
                goodsName:data[0].goodsName,
                imgList:JSON.parse(data[0].imgsUrl),
                discount:data[0].discount==0?10:data[0].discount,
                newPrice:(data[0].price*(data[0].discount==0?10:data[0].discount)/10).toFixed(2),
                oldPrice:(data[0].price*1).toFixed(2),
                num:data[0].buynumber
            })
            let history = JSON.parse(window.localStorage.getItem("history"))||[];
            if(history && history.length != 0){
                  history.push(data[0]);
            }else{
                  history = [data[0]];
            }
            console.log(history)
            let obj = JSON.stringify(history);
            console.log(obj)

            window.localStorage.setItem("history",obj)

        })
    }
    componentDidMount(){
         this.mySwiper = new Swiper(this.refs["swiper-container"],{
           loop:true,
            pagination:this.refs.page,
            slidesPerView:2,
            spaceBetween:0,
        });

    }
    componentDidUpdate(){
      // console.log("111")
      // console.log(this.mySwiper)
      this.mySwiper.reLoop();
      this.mySwiper.update();

    }
    //添加购物车
    addToCart(){
            //获取用户id判断用户是否登录
            var nowID = Tools.getUserId()
            var cartObj = JSON.parse(window.localStorage.getItem("userID"))
            var nowList = []
            console.log(cartObj)
            if(nowID){
                  for(var i=0; i<cartObj.length;i++){
                      console.log(typeof cartObj[i].name)
                      console.log(typeof nowID)
                      if(cartObj[i].name == nowID){
                            nowList = cartObj[i].list;
                            nowList.push(this.state.goodsList)
                            console.log(nowList)
                            cartObj[i].list = nowList;
                            break;
                      }
                  }
                  window.localStorage.setItem("userID",JSON.stringify(cartObj))
                  alert("添加购物车成功")
            }
            console.log(cartObj)

          // var userID = JSON.parse(window.localStorage.getItem("userID"))
          // // console.log(userID)
          // if(userID && userID.length != 0){
          //       var cartObj = []
          //
          //       if( window.localStorage.getItem("cartList")){
          //             cartObj=JSON.parse(localStorage.getItem("cartList"))
          //             cartObj.push(this.state.goodsList)
          //       }else{
          //         cartObj.push(this.state.goodsList)
          //       }
          //       window.localStorage.setItem("cartList",JSON.stringify(cartObj))
          //        alert("添加购物车成功")
          // }else{
          //       window.location.hash = "#/login"
          // }

    }
    toDetial(){
        this.props.showCon(true)
    }
    render(){

        return(
          <div style={this.props.show?{"display":"none"}:{"display":"block"}} className="detial-con">
              <div className="swiper-container" ref="swiper-container">
                  <div className="swiper swiper-wrapper">
                      {
                        this.state.imgList.map((ele,index)=>{
                            return(
                                <div className="swiper-slide" key={index}><img src={ele}/></div>
                            )
                        })
                      }
                  </div>
              </div>
              <div className="pagegation">
                  <ul className="page" ref="page"></ul>
              </div>
              <ul className="detial-info">
                  <li>商品名称：{this.state.goodsName}</li>
                  <li className="price">价格：
                      <span className="new">{"￥"+this.state.newPrice}</span>
                      <del style={this.state.discount==10?{"visibility":"hidden"}:{"visibility":"normal"}} className="old">{"￥"+this.state.oldPrice}</del>
                  </li>
                  <li className="num">购买人数：{this.state.num}</li>
              </ul>
              <ul className="bottom">
                  <li onClick={this.toDetial.bind(this)} className="to-detial">
                      <div  className="mark"><i>i</i></div>
                      <p>查看商品详情</p>
                      <div className="mark">{"<"}</div>
                  </li>
                  <li className="add-cart">
                      <button onClick={this.addToCart.bind(this)}>添加到购物车</button>
                  </li>
              </ul>
          </div>

        )
    }
}
export default DetialPage
