import React,{Component} from "react"
import {Header,Content,Footer} from "../common/common"
import "../common/index.less"

class Index extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="indexPage">
                <Header/>
                <Content hasSubNav={false} hasFooter={true}>
                    <a href=" #/detail/5 ">list</a>
                </Content>
                <Footer/>
            </div>
        )
    }
}

export default Index