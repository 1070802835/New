import React,{Component} from "react"
import {Header,Content,Footer} from "../common/common"

class Detail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="detailPage">
                <Header/>
                <Content hasSubNav={false} hasFooter={true}>
                    <h1>{this.props.params.productId}</h1>
                </Content>
                <Footer/>
            </div>
        )
    }
}

export default Detail
