let Header=React.createClass({
    render:function () {
        return (
            <div>
                <ul className="header">
                    <li className="header-btn">{"<"}</li>
                    <li className="header-tit">登录</li>
                    <li className="header-btn">搜索</li>
                </ul>
            </div>
        )
    }
});

let Content=React.createClass({
    render:function () {
        return (
            <div>{ this.props.children }</div>

        )
    }
});

let List=React.createClass({
    getInitialState:function () {
      return{
          showPass:false,
          password:"",
          userName:""
      }
    },
    changeType:function () {
      this.setState({
          showPass:!this.state.showPass
      })
    },
    filterUserName:function (ev) {
        this.setState({
            userName:ev.target.value.replace(/most/g,"****")
        });
        //console.log(this.state.userName);
        //this.state是异步  所以 这里显示的不是执行完的结果   在render里面输出，就是正确的结果
    },
    filterPassword:function (ev) {
       this.setState({
           password:ev.target.value.replace(/most/g,"****")
       });
        //console.log(this.state.password)
        //this.state是异步  所以 这里显示的不是执行完的结果  在render里面输出，就是正确的结果
    },
    sendData:function () {
      console.log(this.state.userName);
      console.log(this.state.password)
    },
    render:function () {
       // console.log(this.state.userName); 这里显示的是执行完的结果
        return (
            <div className="content">
                <ul>
                    <li><input placeholder="输入账号" value={this.state.userName} onChange={this.filterUserName} type="text" className="text-bar"/></li>
                    <li><input placeholder="输入密码" value={this.state.password} onChange={this.filterPassword} type={this.state.showPass?"text":"password"} className="text-bar"/></li>
                    <li className="forget">
                        <input id="in1" type="checkbox"/><label htmlFor="in1">记住密码</label>
                        <a className="go-forget" href="##">忘记密码?</a>
                    </li>
                    <li className="forget">
                        <input onClick={this.changeType} id="in2" type="checkbox"/><label htmlFor="in2">显示密码</label>
                    </li>
                </ul>
                <button className="button" onClick={this.sendData}>登录</button>
                <button className="button">注册</button>
            </div>
        )
    }
});

let Footer=React.createClass({
    render:function () {
        let arr1=["首页","分类","逛逛","我的"];
        return (
            <div className="footer">
                <ul>
                    {
                        arr1.map(function (ele,index) {
                            return <li key={index}>{ ele }</li>
                        })
                    }
                </ul>
            </div>
        )
    }
});
let PageIndex=React.createClass({
   render:function () {
       return (
           <div>
               <Header/>
               <content>
                    <List/>
               </content>
               <Footer/>
           </div>
       )
   }
});

ReactDOM.render(
    <PageIndex/>,
    document.getElementById("most")
)