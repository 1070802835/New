import React,{Component} from "react"
import ReactDOM from "react-dom"
import store from "./store"

console.log(store.getState().listData);
if(module.hot){
    module.hot.accept()
}