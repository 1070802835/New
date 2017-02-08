import React,{Component} from "react";
class Header extends Component{
    constructor(props){
        super(props)
    }
    render (){
        return(
            <div className="header">
                <ul className="header_ul">
                    <li className="title_left"> { "<" } </li>
                    <li className="title"> List </li>
                    <li className="title_right"> 搜索 </li>
                </ul>
            </div>
        )
    }

}
class Content extends Component{
    constructor(props){
        super(props);
    }

    /*render(){
        let style1={"bottom":this.props.hasFoot?"50px":"0"};
        return(
            <div style={style1} className="content">
                {this.props.hasScroll?
                    <div className="scroll_wrap" ref="scroll_wrap">
                        <div className="scroller" >
                            {this.props.children}
                        </div>
                    </div>:this.props.children}

                </div>
        )
    }*/
    render(){
        let style1={"bottom":this.props.hasFoot?"50px":"0"};
        return(
            <div style={style1} className="content">
                { this.props.children }
            </div>
        )
    }
    // componentDidMount(){
    //     this.props.hasScroll&&(this.listScroll=new iScroll(this.refs.scroll_wrap))
    // }
    //
    // componentDidUpdate(){
    //     this.props.hasScroll&&this.listScroll.refresh()
    //
    // }

}
class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div className="footer">
                <ul className="footer_ul">
                    <li>首页</li>
                    <li>分类</li>
                    <li>列表</li>
                    <li>我的</li>
                    <li>更多</li>
                </ul>
            </div>
        )
    }
}
export {Header,Content,Footer}