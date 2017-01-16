import React,{Component} from "react"

//头部组件
class Header extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUpdate(){

    }
    componentDidUpdate(){

    }
    render(){
        return(
            <div className="header">

            </div>
        )
    }
}


//内容组件
class Content extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUpdate(){

    }
    componentDidUpdate(){

    }
    render(){
        let style1={"top":this.props.hasSubNav?"80px":"50px","bottom":this.props.hasFooter?"50px":""};
        return(
            <div style={style1}  className="content">

                {this.props.children}
                </div>
        )
    }
}



//Footer组件
class Footer extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUpdate(){

    }
    componentDidUpdate(){

    }
    render(){
        return(
            <div className="footer">

            </div>
        )
    }
}

export {Header,Content,Footer}



if(module.hot){
    module.hot.accept()
}