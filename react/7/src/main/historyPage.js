import React,{Component} from "react"
import ProductList from '../components/product-list.js'
import "../css/base/common.css"

let Action={
	on:function(name,fn){
		 this[name]=fn
	},
	emit:function(name,data){
			this[name](data)
	}

}

class HistoryHeader extends Component{
	constructor(props) {
		super(props);

	}
    clearHistory(){
			localStorage.removeItem("history")
				Action.emit("historyClear",[]);
	}
	render(){
		return (
			<div className="historyHeader">
				<span className="backHistory" onClick={()=>{window.history.go(-1)}} >返回</span>
				<p>历史记录</p>
				<span className="clearHistory" onClick={()=>{this.clearHistory()}} >清空</span>
			</div>
		)
	}
}


class HistoryPage extends Component{
	constructor(props) {
		super(props);

		let history = 	JSON.parse(window.localStorage.getItem("history"));
		console.log(typeof history)
		this.state = {
				hisList:history?history:[]
		}

	}
	componentDidMount(){
				Action.on("historyClear",function(){
						this.setState({
							hisList:[]
						})
				}.bind(this))
	}
	render(){
			console.log(this.state.hisList)
		return (
			<div className="historyPage">
				<HistoryHeader/>
				<ProductList productData={this.state.hisList}></ProductList>
			</div>
		)
	}
}
export default HistoryPage
