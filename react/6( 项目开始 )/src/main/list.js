/**
 * Created by Kk on 2016/12/29.
 */
import React,{Component} from "react"
import ReactDOM from "react-dom"
import ReactIScroll from "react-iscroll"
import ScrollOptions from "../config/config"


console.log(ScrollOptions);
import {Header,Footer,Content,SubHeader,GoodList} from "../components/common"
let name = "global name";
class List extends Component{
    constructor(props){
        super(props);
        this.state={
            flag:false,
            classData:[],
            pdtData:[]
        };
        this.classID = undefined;
        this.lineNumber = 5;
        this.pageCode = 0;
        this.refresh = null;
        $.get("http://datainfo.duapp.com/shopdata/getclass.php",(data)=>{
            console.log(data);
            this.setState({
                classData:data
            })
        },"json");
        this.getProductData()
    }
    change(){
        //console.log(this)   //  without bind ==>null!!!
        this.setState({
            flag:!this.state.flag
        })
    }
    getProductData(){
        $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
            "classID":this.classID,
            "linenumber":this.lineNumber,
            "pageCode":this.pageCode
        },(data)=>{
            console.log(data);
            //hasData  没有更多时不再重复请求
            if(data){
                this.setState({
                    pdtData:this.pageCode==0?data:this.state.pdtData.concat(data)
                })
            }

        })
    }
    onScrollEnd(myscroll){
        console.log("end");
        /*if(myscroll.y>60){
            console.log('refresh');
            this.refresh = true;
            this.refs.hah.innerHTML = "松开刷新";
        }*/
        if(this.refresh){
            this.pageCode = 0;
            this.getProductData();
            this.refresh = false;
        }else if(myscroll.y-myscroll.maxScrollY<=20){
            console.log("load more");
            this.pageCode++;
            this.getProductData()
        }
    }
    onScroll(myscroll){
        console.log("scrollY"+myscroll.y+"-----"+myscroll.maxScrollY);
        if(myscroll.y>60){
            console.log('refresh');
            this.refresh = true;
            this.refs.hah.innerHTML = "松开刷新";
        }
    }
    changeClass(id){
        this.classID = id;
        this.pageCode = 0;
        console.log(id);
        this.getProductData();
    }
    render(){
        let iDisplay = {display:!this.state.flag?"block":"none"};
        return (
            <div id="page-list">
                <Header hasBack={true} title={"新品上市"} hasRightBtn={true}/>
                <SubHeader classData={this.state.classData} changeClass={(id)=>this.changeClass(id)}/>
                <Content hasSubHeader={true} hasFooter={true} >
                    <h3 ref="hah" className="tips">下拉刷新</h3>
                    <ReactIScroll iScroll={IScroll}
                                  options={ScrollOptions}
                                  onScroll={(myscroll)=>this.onScroll(myscroll)}
                                  onScrollEnd={(myscroll)=>this.onScrollEnd(myscroll)}>
                        <GoodList pdtData={this.state.pdtData}/>
                    </ReactIScroll>
                </Content>
                <Footer/>
            </div>
        )
    }
}
/* 在这里设置默认数据源 */
List.defaultProps= {
    listData:[]
};

// ReactDOM.render(<List listData={"hah"}/>,document.getElementById("page-list"));
export default List

if (module.hot) {
    module.hot.accept();
}
