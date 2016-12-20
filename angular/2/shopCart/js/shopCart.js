angular.module("myCart",[]).controller("ctr1",["$scope","$http",function ($s,$h) {
    $s.sum=0;
    $s.num=0;
    $s.dataList=[];
    $h.get("http://xuliangmost.com/html/static/dist/json/list-page.json").success(function(data){
       $s.dataList=data.list;
        for(var i=0;i<data.list.length;i++){
            $s.sum+=$s.dataList[i].price*$s.dataList[i].count;
            $s.num+=$s.dataList[i].count*1
        }
    }).error(function () {
        alert("请求失败")
    });
    $s.clickButton=function (a,index) {
        var sumNumber=$s.dataList[index].count*1;
        if(a){
            $s.dataList[index].count=sumNumber+a;
            if($s.dataList[index].count<1){
                $s.dataList.splice(index,1)
            }
        }else{
            $s.dataList.splice(index,1)
        }
    };
    $s.$watch("dataList",function (newVal,oldVal) {
        var allPrice=0;
        for(var j=0;j<newVal.length;j++){
            allPrice+=newVal[j].count*newVal[j].price
        }
        $s.sum=allPrice;
    },true)
}]);

$("#check2").click(function () {
    if($(this).is(":checked")){
        $(".productList-int").prop("checked",true)
    }else{
        $(".productList-int").prop("checked",false)
    }
});