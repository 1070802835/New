var index = 0;
var time;
var Left=parseFloat($("#Lb").css("height"))/2-parseFloat($("#LB-ann").css("height"))/2;
$("#LB-sp1,#LB-sp2").css("top",Left);
Run();
colorChange();


$(".c1").css("display", "none");
function dd() {
	$("#LB-ul1").children().eq(index).fadeIn(1000).siblings().fadeOut(1000);
}
function Run() {
	clearInterval(time);
	time = setInterval(function() {
		index++;
		if(index == 5) {
			index = 0;
		}
		dd();
		colorChange();
	}, 1500)
}



$("#LB-ul1").on("mouseover",function(){
	clearInterval(time);
}).on("mouseout",function(){
	Run()
});




$("#LB-sp1").click(function(e){
	clearInterval(time);
	if(e.target==this){
		index--;
		if(index==-1){
			index=4;
		}
		$("#LB-ul1").children().stop().eq(index).fadeIn(700).siblings().fadeOut(700);
	}
	colorChange();
});



$("#LB-sp2").click(function(e){
	if(e.target==this){
		index++;
		if(index==5){
			index=0;
		}
		$("#LB-ul1").children().stop().eq(index).fadeIn(700).siblings().fadeOut(700);
	}
	colorChange();
});


$("#ann-an").children().mouseenter(function () {
	clearInterval(time);
	$("#LB-ul1").children().stop(true,false);
	index=$(this).index();
	dd();
}).mouseleave(function () {
	Run();
});
$("#ann-an li").hover(function () {
	var index1=$(this).index();
	colorChange();
});


function colorChange() {
	$("#ann-an").children().eq(index).css("background","#c7d1d6").siblings().css("background","#787878")
}

for(var k=0;k<4;k++){
	$("#eg a").eq(k).css({
		backgroundPosition:k*-267+'px '+'0px'
	})
}

for(var i=0;i<20;i++){
	if(i<10){
		$("#hot-sign-list a").eq(i).css({
			backgroundPosition:i*-110+'px '+'0px'
		})
	}else{
		$("#hot-sign-list a").eq(i).css({
			backgroundPosition:(i-10)*-110+'px '+'-50px'
		})
	}
}
$("#hot-sign-list a").hover(function () {
	$(this).css("backgroundImage","url('images/index-sign2.png')")
},function () {
	$(this).css("backgroundImage","url('images/index-sign3.png')")
});

for(var j=0;j<10;j++){
	$(".main-list1 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'4px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list2 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-100px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list3 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-160px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list4 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-55px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list5 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-100px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list6 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-160px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list7 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-55px'
	})
}




$("#a1").click(function () {
	alert(1);
	$(this).attr("href","html/sign-in.html");
});


$.ajax({
	url:'json/index-product.json',
	dataType:'json',
	success:function (data) {
		// console.log(data);
		// alert(data.length)
		for(var i=0;i<data.length;i++){
			var Id=data[i].id;
			var Name=data[i].name;
			var Sr=data[i].sr;
			creatProduct(Id,Name,Sr);
		}
	},
	error:function () {
		alert(1)
	}
});




function creatProduct(id,name,sr) {
	$(".main-right").append("<dl class='right-dl1'><dt class='right-dt1'><a href='javascript:void(0)'>"+id+"</a></dt><dd>"+name+"</dd><a href='javascript:void(0)'><img src='images/index-product"+sr+".jpg' class='caa'><span></span></a></dl>");
	$(".right-dl1").css({
		width:'156px',
		height:'208px',
		float:'left',
		marginTop:'8px',
		marginLeft:'24px'
	}).append("");
	$(".right-dt1").css({
		width:'156px',
			height:'44px',
			lineHeight:'60px',
			textAlign:'center'
	}).children().css({
		color:'#000',
		fontSize:'16px',
		fontWeight:'bolder'
	});
	$(".right-dl1 dd").css({
		width:'156px',
		height:'20px',
		lineHeight:'20px',
		color:'#666',
		textAlign:'center'
	}).next().css({
		display:'block',
		width:'156px',
		height:'130px',
		textAlign:'center'
	});
	$(".caa").css({
		verticalAlign:'middle',
		margin:'0 auto'
	}).next().css({
		height:'130px',
		display:'inline-block',
		verticalAlign:'middle'
	});
}




$.ajax({
	url:'json/index-sale.json',
	dataType:'json',
	success:function (data) {
		// console.log(data);
		// alert(data.length)
		for(var i=0;i<4;i++){
			var Sale=data[i].sale;
			var Name=data[i].name;
			var Sr=data[i].sr;
			var B1=data[i].b1;
			var D1=data[i].d1;
			creatSale(Sr,Sale,Name,B1,D1);
		}
	},
	error:function () {
		alert(1)
	}
});

$("#last-ul li").click(function () {
	$(".last-dl").remove();
	var Index=($(this).index())*4;

	$.ajax({
		url:'json/index-sale.json',
		dataType:'json',
		success:function (data) {
			// console.log(data);
			for(var i=Index;i<Index+4;i++){
				var Sale=data[i].sale;
				var Name=data[i].name;
				var Sr=data[i].sr;
				var B1=data[i].b1;
				var D1=data[i].d1;
				creatSale(Sr,Sale,Name,B1,D1);
			}
		},
		error:function () {
			alert(1)
		}
	});

});






function  creatSale(sr,sale,name,b1,d1) {

	$("#last-div2").append("<dl class='last-dl'><a href='javascript:void(0)' class='last-a'><img src='images/index-sale"+sr+".png'/><span class='last-span'></span></a><p class='last-p1'>"+sale+"</p><a href='javascript:void(0)' class='last-a2'>"+name+"</a><p class='last-p3'><b>"+b1+"</b><del>"+d1+"</del></p></dl>");
	$(".last-dl").css({
		marginTop:'20px',
		marginLeft:'10px',
		width:'230px',
		float:'left'
	});
	// 	.children().first().css({
	// 	textAlign:'center',
	// 	display:'block',
	// 	width:'230px',
	// 	height:'238px',
	// 	// border:'1px solid #d1d3d4',
	// 	borderBotoom:'0',
	// 	background:'#fff'
	// }).children().first().css({
	// 	verticalAlign:'center'
	// });
	$(".last-span").css({
		height:'238px',
		display:'inline-block',
		verticalAlign:'center'
	});

	$(".last-p1").css({
		width:'232px',
		height:'16px',
		background:'#f0a1a1',
		color:'#fff',
		fontSize:'12px',
		lineHeight:'16px',
		textIndent:'6px'
	});

	$(".last-a2").css({
		width:'232px',
		height:'40px',
		display:'block',
		background:'#fff',
		color:'#666',
		fontSize:'12px',
		lineHeight:'20px',
		textIndent:'6px'
	});


	$(".last-p3").css({
		width:'232px',
		height:'20px',
		background:'#fff',
		fontSize:'12px',
		lineHeight:'20px',
		textIndent:'6px'
	});
	// 	.children().first().css({
	// 	color:'red'
	// }).next().css({
	// 	color:'#888',
	// 	fontSize:'12px',
	// 	marginLeft:'4px'
	// });

}

$(window).scroll(function () {
	if($(document).scrollTop()>763){
		$(".main").each(function (index) {
			var Height=$(document).scrollTop();
			var Index=$(".main").eq(index).offset().top;
			var Height1=parseInt($(".main").eq(index).css("height"))/6;
			if(Height<Index+Height1){
				$(".bibibi0").css("background"," #7a6e6e").eq(index).css("background","#c81623");
				if(index>5){
					$(".bibibi0").css("background"," #7a6e6e").eq(5).css("background","#c81623")
				}
				return false;
			}
		})
	}else{
		$(".bibibi0").css("background"," #7a6e6e");
	}

});
$(window).keydown(function (e) {
	if(e.keyCode==37){
		alert($(document).scrollTop())
	}
});

