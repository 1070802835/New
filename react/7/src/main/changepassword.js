import React,{Component} from "react"
import {Header,Content} from "../components/common"

import "../css/user.css"

class UserFoodBack extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="userFoodbackPage">
                <Header title="用户反馈" hasBack={true} hasRightBtn={false}/>
                <Content hasfooter={false}>
                    <UserFoodBackContent/>
                </Content>
            </div>
        )
    }
}

class UserFoodBackContent extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <ul className="foodback-con">
                 <li className="text">
                    <textarea rows="8"></textarea>
                  </li>
                  <li className="btn">
                      <button>提交</button>
                  </li>
            </ul>
        )
    }
}

class ChangePassword extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="changePassword">
                <Header title="修改密码" hasBack={true} hasRightBtn={false}/>
                <Content hasfooter={false}>
                    <ChangePasswordContent/>
                </Content>
            </div>
        )
    }
}

class ChangePasswordContent extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <ul className="changepsd-con">
                 <li className="text">
                      <input placeholder="请输入原密码" />
                      <input placeholder="请输入新密码" />
                      <input placeholder="请再次输入新密码" />
                  </li>
                  <li className="btn">
                      <button>保 存</button>
                  </li>
            </ul>
        )
    }
}

class About extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="aboutPage">
                <Header title="关于我们" hasBack={true} hasRightBtn={false}/>
                <Content hasfooter={false}>
                    <AboutContent/>
                </Content>
            </div>
        )
    }
}

class AboutContent extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <ul className="about-con">
                 <li className="text">
                    <p>欢迎使用韩都衣舍！</p>
                    <p>祝您购物愉快！</p>
                    <p>最终解释权归版权所有！</p>
                  </li>

            </ul>
        )
    }
}

export {ChangePassword,UserFoodBack,About}
