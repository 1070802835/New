import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Header,Content,Footer} from "./common/common"
import "./common/common.less"
class H1 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1> demo </h1>
        )
    }
}

class Page extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="page">
                <Header/>
                <Content hasSubNav={false} hasFooter={true}>
                    <H1/>
                </Content>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(
    <Page/>,
        document.getElementById("page")
);

if(module.hot){
    module.hot.accept()
}