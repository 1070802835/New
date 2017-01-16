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
        this.userPatten=false;
        this.passPatten=false;
        this.repassPatten=false;
    }
    userNameChange(ev){
        this.setState({
            username:ev.target.value
        })
        //  console.log(this.state.username.search(/^[A-Za-z0-9]{6,16}$/))
        if(this.state.username.search(/^[A-Za-z0-9]{6,16}$/) == -1){
            this.userPatten=true;
        }else if(this.state.username.search(/^[A-Za-z0-9]{6,16}$/)== 0){
            this.userPatten=false;
        }
    }
    passwordChange(ev){
        this.setState({
            password:ev.target.value
        })
      var patten2 = this.state.password.search(/^[a-zA-Z0-9!"\#$%&'()*+,-./:;<=>?@\[\\\]^_`\{\|\}\~]{5,16}$/);
        if(patten2 == -1){
            this.passPatten = true;
        }else if(patten2 == 0){
            this.passPatten = false;
        }

    }
    rePasswordChange(ev){
      console.log(ev.target.value)
        this.setState({
            repassword:ev.target.value
        })
        // if(this.state.password === this.state.repassword){
        //     this.repassPatten = false;
        // }else{
        //     this.repassPatten =true;
        // }
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
              }else if(data == 0){
                  alert("用户名已存在")
              }else if(data == 2){
                alert("数据库报错")
              }
          })
    }
    render(){
      var error = {
            userError:"用户名必须为6-16位英文字母、数字、下划线等组成",
            passwordError:"密码必须为6-16位英文字母、数字、下划线等组成",
            repasswordError:"两次密码不一致"
      }
        return(

            <ul className="regist-con">
                <li className="username">账户名称：<input type="text" placeholder="请输入账户" value={this.state.username} required onChange={this.userNameChange.bind(this)} /></li>
                <p style={this.userPatten?{"display":"block"}:{"display":"none"}}>{this.userPatten?this.props.userError:""}</p>
                <li className="password">登录密码：<input type="password" placeholder="请输入密码" required onChange={this.passwordChange.bind(this)}/></li>
                  <p style={this.passPatten?{"display":"block"}:{"display":"none"}}>{this.passPatten?error.passwordError:""}</p>
                <li className="password">确认密码：<input type="password" placeholder="请输入密码" required onChange={this.rePasswordChange.bind(this)}/></li>
                  <p style={this.repassPatten?{"display":"block"}:{"display":"none"}}>{this.repassPatten?error.repasswordError:""}</p>
                <li className="registbtn">
                    <button onClick={this.onSubmit.bind(this)}>确定注册</button>
                </li>

            </ul>
        )
    }
}
LoginContent.defaultProps={
  userError:"用户名必须为6-16位英文字母、数字、下划线等组成",
  passwordError:"密码必须为6-16位英文字母、数字、下划线等组成",
  repasswordError:"两次密码不一致"
}
export default RegistPage
