import React,{Component} from "react"
import {Header,Content} from "../components/common"

import "../css/changepassword.css"

class UserFoodBack extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="changePassword">
                <Header title="修改密码" hasBack={true} hasRightBtn={false}/>
                <Content hasfooter={false}>
                    <UserFoodBackContent/>
                </Content>
            </div>
        )
    }
}

class UserFoodBackContent extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <ul className="changepsd-con">
                 <li className="text">
                    <textarea></textarea>
                  </li>
                  <li className="btn">
                      <button>提交</button>
                  </li>
            </ul>
        )
    }
}

export default ChangePassword
