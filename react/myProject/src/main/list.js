import React,{Component} from "react"
import {Header,Content,Footer} from "../common/common"


class List extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="listPage">
                <Header/>
                <Content hasSubNav={false} hasFooter={true}>
                    <h1>List</h1>
                </Content>
                <Footer/>
            </div>
        )
    }
}

export default List