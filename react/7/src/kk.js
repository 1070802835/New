import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"

import List from "./main/list"
import Index from "./main/index"
import Cart from "./main/cart"
import MinePage from "./main/mine"
import LoginPage from "./main/login"
import RegistPage from "./main/regist"
import {OrderPage,SureOrder} from "./main/myOrder"



ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Index}/>
    <Route path="/index" component={Index}/>
    <Route path="/list" component={List}/>
    <Route path="/mine" component={MinePage}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/orderPage" component={OrderPage}/>
    <Route path="/sureOrder" component={SureOrder}/>
    <Route path="/regist" component={RegistPage}/>
</Router>,document.getElementById("root"));



if (module.hot) {
    module.hot.accept();
}