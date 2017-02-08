
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {Header,Footer,Content} from './components/common.js';



var footerData = ['首页','列表页','购物车','我的']


class Page extends Component {
	constructor (props){
		super(props);
		this.state={
			list:'',
			flag:false
		}
	}
	componentDidMount(){
		$.getJSON('http://datainfo.duapp.com/shopdata/getGoods.php?callback=?', function(data){
			this.setState({
				list:JSON.stringify(data),
                flag:!this.state.flag
			})
		}.bind(this));
	}
	render (){
			if(this.state.flag){
                console.log(JSON.parse(this.state.list));
			}
		return (
				<div className="page">
						<Header title="列表页" subTitle="购物车"/>
						<Content>{this.state.list}</Content>				
						<Footer footerData={footerData}/>
				</div>
			)
	
	}
}
ReactDOM.render(<Page/>,document.getElementById('root'));

//自己私有的内容是一个组件
