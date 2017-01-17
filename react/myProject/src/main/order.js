import React,{Component} from "react"
import {Header,Content,Footer} from "../common/common"


class Order extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="orderPage">
                <Header/>
                <Content hasSubNav={false} hasFooter={true}>
                    <h1>Order</h1>
                </Content>
                <Footer/>
            </div>
        )
    }
}

export default Order