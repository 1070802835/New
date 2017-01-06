import "../css/base/common.css"
import "../css/login.css"

import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Header,Footer,Content} from "../components/common"

class LoginPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="loginPage">
                <Header title="用户登录"/>
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
        this.state={
            username:"",
            password:"",
            checked:true,
            show:false
        }
    }
    changeState(){
          this.setState({
              checked:!this.state.checked
          })
    }
    toLogin(){
      $.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{
              status:"login",
              userID:this.state.username,
              password:this.state.password
          },(data)=>{
          if(typeof data == "object"){
                var  obj=[]
                if(window.localStorage.getItem("userID")){
                    console.log("111")
                    var reobj = JSON.parse(window.localStorage.getItem("userID"))
                    // for(var i=0; i<reobj.length; i++){
                    //     if(reobj[i].name == this.state.username){
                    //         alert("用户已存在")
                    //     }
                    // }
                    reobj.push({
                        name:this.state.username,
                        list:[]
                    })
                     window.localStorage.setItem("userID",JSON.stringify(reobj))

                }else{
                      obj=[{
                              name:this.state.username,
                              list:[]
                            }]
                      window.localStorage.setItem("userID",JSON.stringify(obj))
                }
          }
          window.location.hash="#/list"

      })
    }
    userNameChange(ev){
        this.setState({
            username:ev.target.value
        })
    }
    passwordChange(ev){
        this.setState({
            password:ev.target.value
        })
    }
    toRegist(){
        window.location.hash = "#/regist"
    }
    showPassword(){
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        return(
            <ul className="login-con">
                <li className="username"><input onChange={(ev)=>{this.userNameChange(ev)}} type="text" placeholder="请输入账户" /></li>
                <li className="password"><input type={this.state.show?"text":"password"} onChange={(ev)=>{this.passwordChange(ev)}} placeholder="请输入密码" /></li>
                <li  className="show">
                    <label>
                        <input onClick={()=>this.showPassword()} type="checkbox" />
                        <span>显示密码</span>
                    </label>
                    <a href="javascript:;" className="forget">忘记密码?</a>
                </li>
                <li  className="remember">
                    <label>
                        <input type="checkbox" checked={this.state.checked?"checked":""} onClick={this.changeState.bind(this)} />
                        记住密码自动登录
                    </label>
                </li>
                <li>
                    <button onClick={this.toLogin.bind(this)} className="login">登录</button>
                </li>
                <li>
                    <button onClick={this.toRegist.bind(this)} className="regist">注册</button>
                </li>
            </ul>
        )
    }
}
export default LoginPage
