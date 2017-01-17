import React,{Component} from "react"

import {Header,Content,Footer} from "../common/common"


class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="loginPage">
                <Header/>
                <Content hasSubNav={false} hasFooter={true}>
                    <h1>Login</h1>
                </Content>
                <Footer/>
            </div>
        )
    }
}

export default Login