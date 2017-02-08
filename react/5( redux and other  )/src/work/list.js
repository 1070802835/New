import "./list.css";
import React, {Component} from  "react"
import ReactDOM from "react-dom";
import {Header,Content,Footer} from "./common.js";
import ReactIScroll from "react-iscroll"
import {scrollOption} from "./iscrollConfig"
class ContentList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <ul className="content_ul1">
                        {
                            this.props.productList.map(function(ele,index){
                                return (
                                    <li className="content_ul1_li" key={index}>
                                        <br/>
                                        <img src={ ele.src } alt=""/>
                                        <p>名字 :  { ele.parductName } </p>
                                        <p>数量 :  { ele.count } </p>
                                        <p>颜色 :  { ele.color } </p>
                                    </li>
                                )
                            })

                        }


                </ul>
        );
            //写法二 <button className="button" onClick={this.change.bind(this)} > 变 </button>-
    }
}
class List extends Component{
    constructor(props){
        super(props);
        this.state={
            listDataL:[],
        }
    }
    componentWillMount(){
        this.dataChange()
    }
    componentDidMount(){

    }
    componentDidUpdate(){
        this.refs.refresh.style.display="block";
    }
    //pageIndex:0; //上拉加载的时候，给pageIndex++来添加数据，新数据通过添加数组的方法实现
    dataChange(){
        let that=this;
        $.ajax({
            url:"http://xuliangmost.com/html/static/dist/json/list-page.json",
            dataType:"json",
            success:function (data) {

                that.setState({
                    listDataL:data.list
                });
                console.log("upData")
            }
        })
    }

    onScrollEnd(myscroll){
        console.log("end");
        if(this.refresh){
            this.dataChange();
            this.refresh=false;
            this.refs.refresh.innerHTML="下拉刷新"
        }
        if(myscroll.y-myscroll.maxScrollY<50){
            this.dataChange();
        }

    }
    onScroll(myScroll){
        //this.pageIndex++;
        if(myScroll.y>56){
            this.refresh=true;
            this.refs.refresh.innerHTML="松开刷新"
        }else{
            this.refresh=false;
            this.refs.refresh.innerHTML="下拉刷新"
        }
    }

    render(){
        return(
            <div className="most">
                <Header/>
                <Content onTouchEnd={()=>{alert(1)}}  hasScroll={true}  hasFoot={true}>
                    <p ref="refresh" className="refresh" >{ "下拉刷新" }</p>
                   <ReactIScroll iScroll={IScroll}
                                 options={ scrollOption }
                                 onScroll={(myScroll)=>{this.onScroll(myScroll)}}
                                 onScrollEnd={(myScroll)=>{this.onScrollEnd(myScroll)}}>
                       <ContentList productList={this.state.listDataL}/>
                   </ReactIScroll>
                </Content>
                <Footer/>
            </div>
        )
    }
}
ReactDOM.render(
  <List/>,
    document.getElementById("list")
);
if (module.hot) {
    module.hot.accept();
}