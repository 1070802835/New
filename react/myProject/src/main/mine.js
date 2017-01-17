import React,{Component} from "react"
import {Header,Content,Footer} from "../common/common"


class Mine extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="minePage">
                <Header/>
                <Content hasSubNav={false} hasFooter={true}>
                    <h1>Mine</h1>
                </Content>
                <Footer/>
            </div>
        )
    }
}

export default Mine