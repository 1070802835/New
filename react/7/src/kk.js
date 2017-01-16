import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"

import List from "./main/list"
import Index from "./main/index"
import Cart from "./main/cart"
import MinePage from "./main/mine"
import LoginPage from "./main/login"
import RegistPage from "./main/regist"
import DetialPage from "./main/detial"
import {OrderPage,SureOrder} from "./main/myOrder"
import More from "./main/more"
import {ChangePassword,UserFoodBack,About} from "./main/changepassword"
import HistoryPage from "./main/historyPage"



ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Index}/>
    <Route path="/index" component={Index}/>
    <Route path="/list" component={List}/>
    <Route path="/order" component={List}/>
    <Route path="/mine" component={MinePage}/>
    <Route path="/cart(/:hah)" component={Cart}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/regist" component={RegistPage}/>
    <Route path="/detial(/:goodsID)" component={DetialPage}/>
    <Route path="/orderPage" component={OrderPage}/>
    <Route path="/sureOrder" component={SureOrder}/>
    <Route path="/more" component={More}/>
    <Route path="/changepassword" component={ChangePassword}/>
    <Route path="/userfoodback" component={UserFoodBack}/>
    <Route path="/about" component={About}/>
    <Route path="/history" component={HistoryPage}/>
</Router>,document.getElementById("root"));


if (module.hot) {
    module.hot.accept();
}
