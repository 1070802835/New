/**
 * Created by Kk on 2016/12/29.
 */
import "../css/list.css"
import React,{Component} from "react"
import {Link} from "react-router"

class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="header">
                <ul>
                    <Link to={this.props.hash}>
                        <li className="icons">
                            {/*this.props.hasBack?return <div className="circle"><a href={()=>window.history.go(-1)}>返回</a></div>:""*/}
                            {this.props.hasBack?<div onClick={()=>window.history.go(-1)} className="circle">返回</div>:""}
                        </li>
                    </Link>
                    <li className="header-title">{this.props.title}</li>

                        <li className="icons">
                            {this.props.hasRightBtn?<Link to="/cart"><div className="circle">购物车</div></Link>:""}
                        </li>

                </ul>
            </div>
        )
    }
}
class Footer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        var footList =["index","list","mine","cart","more"]
        return (
            <div className="footer">
                <ul>{
                      footList.map((ele,index)=>{
                          return <li key={index}>{ele}</li>
                      })
                }</ul>
            </div>
        )
    }
}
class Content extends Component {
    constructor(props){
        super(props)
    }
    render(){
        // let bottomStyle = {bottom:this.props.hasFooter?"50px":"0"}
        let contentClass = "content"
        +(this.props.hasSubHeader?" has-sub-header":"")
        +(this.props.hasFooter?" has-footer":"")
        let contentStyle = {
            "overflowY":this.props.hasIscroll?"hidden":"auto"
        }
        return (
            <div className={contentClass} >
                {this.props.children}
            </div>
        )
    }
/*    componentDidMount(){
        this.props.hasIscroll&&(this.mySrcoll = new IScroll(this.refs.scrollWrap))
    }
    componentDidUpdate(){
        this.props.hasIscroll&&this.mySrcoll.refresh()
    }*/
}

class GoodList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="list-wrap">
                {
                    this.props.pdtData.map((ele,i)=>{
                        return (
                            <li goodsID={ele.goodsID} key={i}>
                                <a href={"#/detial/"+ele.goodsID}><img src={ele.goodsListImg} /></a>
                                <Link to={"/detial/"+ele.goodsID}>
                                    <p className="pdt-name">{ele.goodsName}</p>
                                </Link>
                                <p className="pdt-price"><span>￥{ele.price}.00</span><del>￥699.00</del></p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
class SubHeader extends Component {
    constructor(props){
        super(props)
    }
    handleClick(id){
        console.log("common"+id)
        this.props.changeClass(id)
    }
    render(){
        return (
            <div className="sub-header">
                <ul id="pdt-class">
                    {
                        this.props.classData.map((ele,i)=><li key={i} onClick={()=>this.handleClick(ele.classID)}>{ele.className}</li>)
                    }
                </ul>
            </div>
        )
    }
}
export {Header,Footer,Content,SubHeader,GoodList}


if(module.hot){
    module.hot.accept()
}
