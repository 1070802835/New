
//此组件是定义一些公共的组件
//先引入一些react 的组件
import '../css/common.css';
import React,{Component} from 'react';

class Header extends Component {
	//为什么props 需要在 constructor 中继承react 的组件的方法，应用在此组件上
	//实际上就是构造函数的一些属性
	constructor (props){
		super(props)
		//此处还可以设置state 自己私有的状态
	}
	//下面是自己私有的方法
	render (){
		return (
			<div className="header">
				<ul>
					<li className='header-btn'>{'<'}</li>
					<li className='header-tit'>{this.props.title}</li>
					<li className="header-btn">{this.props.subTitle}</li>
				</ul>
			</div>
		)
	}
}

class Footer extends Component {
	constructor (props){
		super(props)
	}
	render (){
		return (
			<div className="footer">
				<ul>
					{
						this.props.footerData.map(function(ele,index){
							return <li key={index} className="footpart">{ele}</li>	
						})
					}
				</ul>
			</div>
		)
	}
	
}

class Content extends Component {
	constructor (props){
		super(props)
	}
	render (){
		return <div className="content">{this.props.children}</div>
	}
}

//建立了组件但是没有输出，有什么卵用！！！！！！

export {Header,Content,Footer}
