var flag=true;
$("#rightNav-left .bibo").click(function () {
	if(flag){
		$("#rightNav").stop().animate({
			right:0
		},400);
		rightNav.loadCookie()
	}else{
		$("#rightNav").stop().animate({
			right:"-370px"
		},400)
	}
	flag=!flag;

});
var tar1={
	scrollTop:0
};
$("#rightNav-left .biubiubiu1").click(function () {
	$("body,html").animate(tar1,600,"easeOutCubic")
});



var Height1=parseInt($("body,html").css("height"))/2-50;
$("#rightNav-left").css({
	top:Height1
});

$("#carMain-top").children().last().click(function () {
	$("#rightNav").stop().animate({
		right:"-370px"
	},400);
	flag=true;
});

if($.cookie("flag")){
	$("#signtest").css('display','none');
	rightNav.loadCookie()
}else{
	$("#signtest").css('display','block');
}




function loadMe(id) {
	var url="http://10.17.158.241:8081/Product/GetProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			Id:id,
			type:"Product"
		},
		success:function (data) {
			if(data.length<1){
				$("#cartMain-Mid").html("<div style='width: 100%;height: 200px;color: red;text-align: center;line-height: 200px;font-size: 20px;'>你的购物车空啦!快滚去买东西!!</div>");
			}else{
				var list1=JSON.parse(data.Data);
				var obj={list:list1};
				var html1=template("gouwuche",obj);
				$("#cartMain-Mid").html(html1);
				if($("#rightNav").css("height")>230){
					$("#rightNav").attr('overflow-y','scroll')
				}

			}
		}
	};
	$.ajax(url,setting)
}

function loadCookie() {
		var oBject=JSON.parse($.cookie("user"));
		var arr=[];
		$.each(oBject,function (key) {
			if(key!="index"){
				arr.push(key);
			}
		});
		for(var i=0;i<arr.length-1;i++){
			for(var k=0;k<arr.length-1;k++){
				if(oBject[arr[i]]<oBject[arr[i+1]]){
					var temp=arr[i];
					arr[i]=arr[i+1];
					arr[i+1]=temp;
				}
			}
		}
		$("#uName").text(arr[0]);
		loadMe(arr[0])
}
var rightNav={
	loadMe:function(id) {
		var url="http://10.17.158.241:8081/Product/GetProductById_get";
		var setting={
			dataType:"jsonp",
			data:{
				Id:id,
				type:"Product"
			},
			success:function (data) {
				if(data.length<1){
					$("#cartMain-Mid").html("<div style='width: 100%;height: 200px;color: red;text-align: center;line-height: 200px;font-size: 20px;'>你的购物车空啦!快滚去买东西!!</div>");
				}else{
					var list1=JSON.parse(data.Data);
					var obj={list:list1};
					var html1=template("gouwuche",obj);
					$("#cartMain-Mid").html(html1);
					if($("#rightNav").css("height")>230){
						$("#rightNav").attr('overflow-y','scroll')
					}

				}
			}
		};
		$.ajax(url,setting)
	},
	loadCookie:function () {
		var oBject=JSON.parse($.cookie("user"));
		var arr=[];
		$.each(oBject,function (key) {
			if(key!="index"){
				arr.push(key);
			}
		});
		for(var i=0;i<arr.length-1;i++){
			for(var k=0;k<arr.length-1;k++){
				if(oBject[arr[i]]<oBject[arr[i+1]]){
					var temp=arr[i];
					arr[i]=arr[i+1];
					arr[i+1]=temp;
				}
			}
		}
		$("#uName").text(arr[0]);
		loadMe(arr[0])
	}

};

