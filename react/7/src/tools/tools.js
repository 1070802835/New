/**
 * Created by Administrator on 2017/1/5.
 */
let Tools = {
    getUserId:function () {
        let id = localStorage.getItem("user-id");
        if(!id){
            window.location.hash = "#/login";
        }
        return id
    }
}

export default Tools