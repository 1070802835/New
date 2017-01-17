import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"

import "./common/common.less"

import Index from "./main/index"
import Detail from "./main/detail"
import List from "./main/list"
import Login from "./main/login"
import Mine from "./main/mine"
import Order from "./main/order"



ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Index}/>
        <Route path="/index" component={Index}/>
        <Route path="/detail(/:productId)" component={Detail}/>
        <Route path="/list" component={List}/>
        <Route path="/login" component={Login}/>
        <Route path="/mine" component={Mine}/>
        <Route path="/order" component={Order}/>
    </Router>
), document.getElementById('page'));


if(module.hot){
    module.hot.accept()
}