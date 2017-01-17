import React,{Component} from "react"
import {Header,Content,Footer} from "../common/common"


class Register extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="registerPage">
                <Header/>
                <Content hasSubNav={false} hasFooter={true}>
                    <h1>Register</h1>
                </Content>
                <Footer/>
            </div>
        )
    }
}

export default Register