/**
 * Created by Administrator on 2017/1/5.
 */
let Tools = {
    getUserId:function () {
        //let id = JSON.parse(window.localStorage.getItem("userID"))
        let id = JSON.parse(window.sessionStorage.getItem("nowID"))
        if(!id || id.length == 0){
            window.location.hash = "#/login";
        }else{
          return id
        }

    },
    getBackHash:function(){

    }
}

export default Tools
