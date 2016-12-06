$(".Mid-second-ul2-div").hover(function () {
	$(this).css('z-index','5').css('height','28px');
	$(this).children().last().css({
		display:'block'
	});
}
,function () {
	$(this).children().last().css({
		display:'none'
	});
	$(".Mid-second-ul2-div").css('z-index','0').css('height','27px');
}
);

for(var i=0;i<10;i++){
	$("#Mid-second-ul1 li").eq(i).children().css({
		backgroundPosition:i*-92+'px '+'0px'
	})
}



$("#Mid-last-ul li").hover(function () {
		$(this).children().first().css('z-index','4');
		$(this).children().last().css({
			display:'block'
		});
	}
	,function () {
		$(".Mid-last-a").css('z-index','2');
		$(this).children().last().css({
			display:'none'
		});
	}
);

var url="json/detail-List.json";
var setting={
	dataType:'json',
	success:function (data) {
		// console.log(data);
		var html=template("List",data[0]);
		$("#detailList").html(html);
		$(".product a").click(function () {
			var num=parseInt($(this).attr('hreflang'));
			$(this).attr("href","detail-page.html?"+num)
		});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

		//事件绑定要放到这里


	},
	error:function () {
		alert("失败")
	}
};
$.ajax(url,setting);

$("#detailUl li").click(function () {
	$(this).css('background','#efefef').siblings().css('background','#fff');
	var Index=$(this).index();
	var url="json/detail-List.json";
	var setting={
		dataType:'json',
		success:function (data) {
			console.log(data);
			var html=template("List",data[Index]);
			$("#detailList").html(html);
			$(".product a").click(function () {
				var num=parseInt($(this).attr('hreflang'));
				$(this).attr("href","detail-page.html?"+num)
			});

			var tar1={
				scrollTop:0
			};
			$("body,html").animate(tar1,100)

		},
		error:function () {
			alert("失败")
		}
	};
	$.ajax(url,setting);
});
$("#lastBut").click(function () {
	var num=parseInt($("#lastTx").val())-1;
	var url="json/detail-List.json";
	var setting={
		dataType:'json',
		success:function (data) {
			console.log(data);
			var html=template("List",data[num]);
			$("#detailList").html(html);
			var tar1={
				scrollTop:0
			};
			$("body,html").animate(tar1,100)

		},
		error:function () {
			alert("失败")
		}
	};
	$.ajax(url,setting);
	$("#detailUl li").eq(num).css('background','#efefef').siblings().css('background','#fff');


});
















