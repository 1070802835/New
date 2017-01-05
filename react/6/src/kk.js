import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"

import List from "./main/list"
import Index from "./main/index"
import Cart from "./main/cart"

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Index}/>
    <Route path="/list" component={List}/>
    <Route path="/cart(/:hah)" component={Cart}/>
</Router>,document.getElementById("root"))

if (module.hot) {
    module.hot.accept();
}