import React,{Component} from "react"
import {Header,Footer,Content} from "../components/common"

import "../css/more.css"

class More extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="morePage">
                <Header title="更多"/>
                <Content hasfooter={true}>
                    <MoreContent/>
                </Content>
                <Footer/>
            </div>
        )
    }
}

class MoreContent extends Component{
    constructor(props){
        super(props)

    }
    handleClick(index){
        switch (index){
            case 0:
                console.log("11")
                window.location.hash = "#/changepassword";
                break;
            case 1:
                window.location.hash = "#/userfoodback";
                break;
            case 2:
                window.location.hash = "#/about";
                break;
        }
    }
    render(){
        let moreList = ["修改密码","用户反馈","关于"]
        return(
            <ul className="more-con">
                {
                    moreList.map((ele,index)=>{
                        return <li key={index} onClick={()=>{this.handleClick(index)}}>
                            <p className="con-title">{ele}</p>
                            <p className="con-to">{"<"}</p>
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default More
