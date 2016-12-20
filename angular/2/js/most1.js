angular.module("most1",[])
	.filter("mostFilter",function () {
		return function (str,i,j) {
			// var newStr=str[0].toUpperCase()+str.substring(1);
			var newStr=str[i].toUpperCase()+str[j].toLowerCase();
			return newStr
    }
})
	.filter("timeC",function () {
    return function (str) {
        var newStr=str.toString().split(" ");
        //失败的时候 要 toString()   变成字符串  才能分割
		for(var i=0,ilen=newStr.length;i<ilen<i++;){

		}
        console.log(newStr)
    }
})
	.controller("filter1",["$scope","$filter",function($s,$filter){
		$s.mostData=[
			{
				name:"most",
				student:"kk",
				girlFriend:"3",
				num:"2",
				time:new Date(),
				data_:"19940312"
			},
			{
				name:"most",
				student:"kk1",
				girlFriend:"3",
				num:"4",
				time:new Date(),
				data_:"19940312"
			},
			{
				name:"most",
				student:"kk2",
				girlFriend:"4",
				num:"3",
				time:new Date(),
				data_:"19940312"
			},
			{
				name:"most",
				student:"kk3",
				girlFriend:"5",
				num:"1",
				time:new Date(),
				data_:"19940312"
			}
		];
		$s.name="hey boy I'm your god";
		// $s.name=$filter("mostFilter")($s.name);
		//二次调用       自定义过滤器名    要过滤的内容
		$s.mostData=$filter("orderBy")($s.mostData,"num",true);
		// $s.timeDate=new Date();
		// $s.timeDate=$filter("timeC")($s.timeDate);
	//要过滤的数据 ==> 过滤器选择 ==> 过滤器设置
}]);