/**
 * Created by kk on 2017/1/4.
 */
import React,{Component} from "react"
import ReactDOM from "react-dom"

import {Header,Footer,Content} from "../components/common"

import avatar from "../img/avatar.jpg"

class MineContent extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <dl className="info">
                    <dt  className="avatar-wrap">
                        <img className="avatar" src={avatar} alt=""/>
                    </dt>
                    <dd>
                        <p className="user-name">昵称：未知</p>
                        <p>余额：<span className="money">0</span></p>
                    </dd>
                </dl>
                <ul>
                    <li><a href="#/order">我的订单</a><span>></span></li>
                    <li><a href="#/cheap">我的优惠券</a><span>></span></li>
                    <li><a href="#/history">浏览记录</a><span>></span></li>
                    <li><a href="#/collect">我的收藏</a><span>></span></li>
                </ul>
            </div>
        )
    }
}



class MinePage extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="page-mine">
                <Header hasFooter={true} hasRightBtn={<div className="circle">充值</div>} title="个人中心"/>
                <Content hasFooter={true}>
                    <MineContent/>
                </Content>
                <Footer active="3"/>
            </div>
        )
    }
}

// ReactDOM.render(<MinePage/>,document.getElementById("root"))
export default MinePage

if(module.hot){
    module.hot.accept()
}