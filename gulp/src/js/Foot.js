/**
 * Created by Administrator on 2016/11/3.
 */
// var oMark=document.getElementById("mark");
// var aList=oMark.getElementsByTagName("a");
for(var i=0;i<48;i++){
	if(i<12){
		$("#mark a").eq(i).css({
			backgroundPosition:i*-90+'px '+'0px'
		})
	}
	else if(i<24){
		$("#mark a").eq(i).css({
			backgroundPosition:(i-12)*-90+'px '+'-60px'
		})
	}
	else if(i<36){
		$("#mark a").eq(i).css({
			backgroundPosition:(i-24)*-90+'px '+'-120px'
		})
	}else{
		$("#mark a").eq(i).css({
			backgroundPosition:(i-36)*-90+'px '+'-180px'
		})
	}
}

for(var i=0;i<5;i++){
	$("#foot3div2 .safe").eq(i).css({
		backgroundPosition:i*-108+'px '+'0px'
})
}



//优购的前端太垃圾   所以我就选用了图片整合~~~~
var Top=parseInt($("#foot").css("height"))/2-parseInt($(".sign-change1").css("height"))/2-parseInt($("#mark").css("height"))/4;
$(".sign-change1").css({
	left:"12px",
	top:Top
});
$(".sign-change2").css({
	right:"12px",
	top:Top
});
var flag=true;


$(".sign-change").click(function () {
	if(flag){
		$("#mark a").css("backgroundImage","url('images/foot-sign2.png')")
	}else{
		$("#mark a").css("backgroundImage","url('images/foot-sign.png')")
	}
	flag=!flag;
});

