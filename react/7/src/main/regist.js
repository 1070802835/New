import "../css/base/common.css"
import "../css/regist.css"

import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Header,Footer,Content} from "../components/common"

class RegistPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="registPage">
                <Header title="用户注册"  hasBack={true}/>
                <Content>
                      <LoginContent/>
                </Content>
            </div>
        )
    }
}

class LoginContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:"",
            repassword:""
        }
    }
    userNameChange(ev){
      console.log(ev.target.value)
        this.setState({
            username:ev.target.value
        })

    }
    passwordChange(ev){
      console.log(ev.target.value)
        this.setState({
            password:ev.target.value
        })

    }
    rePasswordChange(ev){
      console.log(ev.target.value)
        this.setState({
            repassword:ev.target.value
        })

    }
    onSubmit(){
        $.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{
                status:"register",
                userID:this.state.username,
                password:this.state.password
            },(data)=>{
            console.log(data)
            if(data==1){
                alert("注册成功！")
                window.location.hash="#/login"
            }
        })
    }
    render(){

        return(
            <ul className="regist-con">
                <li className="username">账户名称：<input type="text" placeholder="请输入账户" value={this.state.username} required onChange={this.userNameChange.bind(this)} /></li>
                <p>{this.state.userError}</p>
                <li className="password">登录密码：<input type="password" placeholder="请输入密码" required onChange={this.passwordChange.bind(this)}/></li>
                <li className="password">确认密码：<input type="password" placeholder="请输入密码" required onChange={this.rePasswordChange.bind(this)}/></li>
                <li className="registbtn">
                    <button onClick={this.onSubmit.bind(this)}>确定注册</button>
                </li>
            </ul>
        )
    }
}
export default RegistPage
