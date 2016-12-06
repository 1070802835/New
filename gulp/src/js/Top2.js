/**
 * Created by Administrator on 2016/11/2.
 */

if($.cookie("flag")){
	checkCookie();
	getCount();
}else{
	$("#ul-mid").css('display','block');
	$("#ul-l-m").css('display','none');
}


$("#ul-right li").eq(2).hover(function () {

	$("#gg").slideDown("fast");
	$(this).css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0
	})
},function () {
	$("#gg").css("display","none");
	$(this).css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",

	})
});

$("#ul-right li").eq(3).hover(function () {
	$("#gd").slideDown("fast").css({background:"white"});
	$(this).css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0
	})
},function () {
	$("#gd").css("display","none");
	$(this).css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",

	})
});

$("#yg").hover(function () {
	$(this).stop().css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0

	}).animate({
		height:"64px"
	},300)
},function () {
	$(this).stop().css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",
		borderBottom:0
	}).animate({
		height:"28px"
	},200)
});


//上面是右边的
$("#ul-left li").eq(1).hover(function () {
	// alert(1)
	$(this).children().css("font-size","12px").html("Seoul Station");
},function () {
	$(this).children().css("font-size","1vw").html("首尔站");
});




$("#ul-left li").eq(2).hover(function () {
	$("#Code").slideDown("fast");
	$(this).css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0
	})
},function () {
	$("#Code").css("display","none");
	$(this).css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",
		borderBottom:0
	})
});



// $("#top2-right-shop").hover(function () {
// 	$(this).css("borderBottom",0);
// 	$("#top2-right-shop2").slideDown("fast");
// },function () {
// 	$(this).css("borderBottom","1px solid #d1d3d4");
// 	$("#top2-right-shop2").css("display","none");
// });
$("#top2-right-shop").click(function () {
	location.href="shopCart.html"
});

function getMycookie() {
	var oBject=JSON.parse($.cookie("user"));
	var arrCookie=[];
	$.each(oBject,function (key) {
		if(key!="index"){
			arrCookie.push(key);
		}
	});
	for(var i=0;i<arrCookie.length-1;i++){
		for(var k=0;k<arrCookie.length-1;k++){
			if(oBject[arrCookie[i]]<oBject[arrCookie[i+1]]){
				var temp=arrCookie[i];
				arrCookie[i]=arrCookie[i+1];
				arrCookie[i+1]=temp;
			}
		}
	}
	return arrCookie[0]
};

function getCount() {
	var url="http://10.17.158.241:8081/Product/GetProductById_get";
	var setting={
		dataType:"jsonP",
		data:{
			Id:getMycookie(),
			type:"Product"
		},

		success:function (data) {
			if(!data){
				$(".top2-right-shop-sp1").html("0");
			}else{

				var str=JSON.parse(data.Data);
				var numCount=0;
				$.each(str,function () {
					numCount+=parseInt(this.count);
				});

				$(".top2-right-shop-sp1").html(numCount);
			}
		},
		complete:function (data) {
		}
	};
	$.ajax(url,setting)
}




$(".all").hover(function (e) {
	e.preventDefault();
	$("#details").stop().slideDown("fast");
},function () {
	$("#details").stop().slideUp("fast");
});



$("#details dl").hover(function () {
	var Index=$(this).index();
	$(".Detail").stop().eq(Index).css('display','block').animate({
		left:"197px"
	},400);

},function () {
	$(".Detail").stop().css({
		display:'none',
		left:"174px"
	});
});
$(".Deatils p").hover(function () {
	$(this).stop().animate({
		marginLeft:"10px"
	},300)
},function () {
	$(this).stop().css("marginLeft",0)
});

//以上都是优购自身的效果




$("#signOut").click(function () {
	// $.removeCookie("flag");
	$.cookie("flag","1",{expires:-1,path:"/"});
	window.location.reload();

});




function checkCookie() {
	if($.cookie("user")){
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
		$("#ul-mid").css('display','none');
	}else{
		$("#ul-mid").css('display','block');
		$("#ul-l-m").css('display','none');
	}
}

$("#top2-mid-butt").click(function () {
	location.href="list-page.html";
});

$("#a1").click(function () {
	var loc=location.href.split("/")[4];
	$(this).attr("href","html/sign-in.html?"+loc)
});