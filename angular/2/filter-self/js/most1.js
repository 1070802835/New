angular.module("most1",[])
	.filter("mostFilter",function () {
		return function (str) {
			// var newStr=str[0].toUpperCase()+str.substring(1);
			var newStr=str[0].toUpperCase()+str.splice(0,1);
			return newStr
    }
})
	.filter("arrChange",function () {
		return function (str,arr) {
			var arr1=[];
			if(arr instanceof Array){
				for(var i=0;i<str.length;i++){
					if(arr.indexOf(i)>-1){
						arr1.push(str[i].toUpperCase())
					}else{
						arr1.push(str[i])
					}
				}
                str=arr1.join("");
			}else{
                for(var i=0;i<str.length;i++){
                    if(arr==i){
                        arr1.push(str[i].toUpperCase())
                    }else{
                        arr1.push(str[i])
                    }
                }
                str=arr1.join("");
			}

			return str
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