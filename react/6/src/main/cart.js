/**
 * Created by Administrator on 2017/1/4.
 */
import React,{Component} from "react"
import ReactDOM from "react-dom"

class Cart extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.params.hah)
    }
    render(){
        return(
            <div className="cart">购物车</div>
        )
    }
}

export default Cart