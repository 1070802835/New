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
        this.pass = ""
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
      let userValue = this.state.username.length
      let passValue = this.state.password.length

      $.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{
              status:"login",
              userID:this.state.username,
              password:this.state.password
          },(data)=>{
              if(userValue == 0 || passValue == 0 ){
                  alert("用户名密码不能为空")
              }else if(typeof data == "object" && userValue != 0 && passValue != 0 ){
                    let userID = JSON.parse(window.localStorage.getItem("userID"))
                    let obj=[]
                    //console.log("true")
                    //判断 userID是否存在
                    if(!userID || userID.length ==0){
                      console.log("userID不存在")
                          if(this.state.checked){
                              obj=[{
                                      name:this.state.username,
                                      password:this.state.password,
                                      list:[]
                                    }]

                          }else{
                                obj=[{
                                        name:this.state.username,
                                        password:"",
                                        list:[]
                                      }]

                          }
                    }else{
                          console.log("userID存在")
                            for(var i=0; i<userID.length;i++){
                                //判断userID中是否有重复id
                                if(userID[i].name == this.state.username){
                                      console.log("重复id")
                                      window.sessionStorage.setItem("nowID",JSON.stringify(this.state.username))
                                      window.location.hash = "#/list"
                                      return;
                                }else{
                                  console.log("无重复id")

                                  if(this.state.checked){

                                        obj = JSON.parse(window.localStorage.getItem("userID"))
                                        obj.push({
                                            name:this.state.username,
                                            password:this.state.password,
                                            list:[]
                                        })

                                  }else{

                                        obj = JSON.parse(window.localStorage.getItem("userID"))

                                        obj.push({
                                            name:this.state.username,
                                            password:"",
                                            list:[]
                                        })

                                  }
                                }
                            }

                    }
                    window.sessionStorage.setItem("nowID",JSON.stringify(this.state.username))
                    window.localStorage.setItem("userID",JSON.stringify(obj))
                    window.location.hash="#/list"
              }else if(data == 0){
                  alert("用户名不存在")
              }else if(data == 2){
                  alert("用户名密码不符")
              }
      })
    }
    rememberPass(){
      let userID = JSON.parse(window.localStorage.getItem("userID"))
      let obj = [];
      if(userID && userID.length != 0 ){
          obj = userID
          for(var i=0; i<obj.length; i++){
              if(obj[i].name == this.state.username){
                  this.pass = obj[i].password
                  this.setState({
                      password:this.pass,
                      checked:true
                  })
                  break

              }
          }
      }else{
            obj=[{
                    name:this.state.username,
                    password:this.state.password,
                    list:[]
                  }]
      }
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
                <li className="username"><input onChange={(ev)=>{this.userNameChange(ev)}} type="text" placeholder="请输入账户" onKeyUp ={this.rememberPass.bind(this)} /></li>
                <li className="password"><input type={this.state.show?"text":"password"} onChange={(ev)=>{this.passwordChange(ev)}} value={this.state.password} placeholder="请输入密码" /></li>
                <li  className="show">
                    <label>
                        <input onClick={()=>this.showPassword()} type="checkbox" />
                        <span>显示密码</span>
                    </label>
                    <a href="javascript:;" className="forget">忘记密码?</a>
                </li>
                <li  className="remember">
                    <label>
                        <input type="checkbox" defaultChecked={this.state.checked} onClick={this.changeState.bind(this)} />
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
