
$("#a1").click(function () {
	var loc=location.href.split("/")[4];
	$(this).attr("href","html/sign-in.html?"+loc)
});


if($.cookie("flag")){
	checkCookie();
}else{
	$("#ul-mid").css('display','block');
	$("#ul-l-m").css('display','none');
}
var myId;
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
		borderBottom:0
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
		borderBottom:0
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



$("#top2-right-shop").hover(function () {
	$(this).css("borderBottom",0);
	$("#top2-right-shop2").slideDown("fast");
},function () {
	$(this).css("borderBottom","1px solid #d1d3d4");
	$("#top2-right-shop2").css("display","none");
});

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
		myId=arr[0];
		loadList(arr[0]);
		$("#ul-mid").css('display','none');
	}else{
		$("#ul-mid").css('display','block');
		$("#ul-l-m").css('display','none');
	}
}

//加载购物车
function loadList(id) {
	var url="http://10.17.158.241:8081/Product/GetProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			Id:id,
			type:"Product"
		},
		success:function (data) {
			if(!data){
				$("#productList").html("<div style='width: 100%;height: 300px;color: red;text-align: center;line-height: 300px;font-size: 20px;'>你的购物车空啦!快滚去买东西!!</div>");
			}else{
				var list1=JSON.parse(data.Data);
				var obj={list:list1};
				var html1=template("list",obj);
				$("#productList").html(html1);


				//减号键
				$(".productList-in1").click(function () {
					var Index=$(this).parent().parent().index();
					$(this).next().val(parseInt($(this).next().val())-1);
					if($(this).next().val()<=0){
						deleteLine(Index);
						$(this).parent().parent().remove();
						$(".total span").html(parseInt($(".total span").html())-parseInt($(this).parent().parent().children(".productList-div2-price").html()));
					}else{
						if($(this).parent().parent().children().first().is(":checked")){
							$(".total span").html(parseInt($(".total span").html())-parseInt($(this).parent().parent().children(".productList-div2-price").html()));
							deleteoneProduct(Index);

							$(this).parent().parent().children().first().prop("checked");
						}else{
							deleteoneProduct(Index);
						}
						$(this).parent().parent().children(".productList-div2-subtotal").html(parseInt($(this).next().val())*parseInt($(this).parent().parent().children(".productList-div2-price").html()))
					}

				});
				//加号键
				$(".productList-in3").click(function () {
					var Index=$(this).parent().parent().index();
					$(this).prev().val(parseInt($(this).prev().val())+1);
					if($(this).parent().parent().children().first().is(":checked")){
						$(".total span").html(parseInt($(".total span").html())+parseInt($(this).parent().parent().children(".productList-div2-price").html()));
						addoneProduct(Index);
						$(this).parent().parent().children().first().prop("checked");
					}else{
						addoneProduct(Index)
					}
					$(this).parent().parent().children(".productList-div2-subtotal").html(parseInt($(this).parent().parent().children(".productList-div2-subtotal").html())+parseInt($(this).parent().parent().children(".productList-div2-price").html()))
				});


				//删除这个商品
				$(".deleteLine").click(function () {
					var Index=$(this).parent().parent().index();
						deleteLine(Index);
						$(this).parent().parent().remove();
						var charge3=$(this).parent().parent().children(".productList-div2-subtotal").html();
					if($(this).parent().parent().children(".productList-int").is(":checked")){
						$(".total span").html(parseInt($(".total span").html())-parseInt(charge3));
					}

				});
				//选中每件商品   价格跟着变化
				$(".productList-int").click(function () {
					if($(this).is(":checked")){
						var Num=$(this).parent().children(".productList-div2-subtotal").html()
						$(".total span").html(parseInt($(".total span").html())+parseInt(Num))
					}
					if(!$(this).is(":checked")){
						var Num1=$(this).parent().children(".productList-div2-subtotal").html();
						$(".total span").html(parseInt($(".total span").html())-parseInt(Num1))
					}

				});

				//数量修改  失去焦点的时候
				$(".productList-in2").blur(function () {
					var Index=$(this).parent().parent().index();
					var count=parseInt($(this).val());
					changeCount(Index,count);
					var charge1=parseInt($(this).parent().next().html());
					$(this).parent().next().html(parseInt($(this).parent().prev().html()*count));
					var charge2=parseInt($(this).parent().next().html());
					if($(this).parent().parent().children(".productList-int").is(":checked")){
						$(".total span").html(parseInt($(".total span").html())-(charge1-charge2));
					}

				});


			}
		}
	};
	$.ajax(url,setting)
}

function deleteoneProduct(index) {
	var url="http://10.17.158.241:8081/Product/GetProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			Id:myId,
			type:"Product"
		},
		success:function (data) {
			var arrProduct=JSON.parse(data.Data);
			arrProduct[index].count=parseInt(arrProduct[index].count)-1;
			upDate(arrProduct);
		}

	};
	$.ajax(url,setting)
}


function addoneProduct(index) {
	var url="http://10.17.158.241:8081/Product/GetProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			Id:myId,
			type:"Product"
		},
		success:function (data) {
			var arrProduct=JSON.parse(data.Data);
			arrProduct[index].count=parseInt(arrProduct[index].count)+1;
			upDate(arrProduct);
		}

	};
	$.ajax(url,setting)
}



function deleteLine(index) {
	var url="http://10.17.158.241:8081/Product/GetProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			Id:myId,
			type:"Product"
		},
		success:function (data) {

			var arrProduct=JSON.parse(data.Data);
			// console.log(data.Data);
			arrProduct.splice(index,1);
			upDate(arrProduct);
		}

	};
	$.ajax(url,setting)
}

function changeCount(index,count) {
	var url="http://10.17.158.241:8081/Product/GetProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			Id:myId,
			type:"Product"
		},
		success:function (data) {
			var arrProduct1=JSON.parse(data.Data);
			arrProduct1[index].count=count;
			upDate(arrProduct1);
		}

	};
	$.ajax(url,setting)
}



function upDate(item) {
	var url="http://10.17.158.241:8081/Product/CreateUpdateProduct_get";
	var setting={
		type:"get",
		dataType:"jsonp",
		data:{
			Id:myId,
			datajson:JSON.stringify(item),
			type:"Product"
		},
		success:function (data) {

		},
		error:function () {
			// alert("加入购物车失败!")
		},
		complete:function () {
			// loadList(myId);
		}
	};
	$.ajax(url,setting)
}





//清空购物车
$(".deleteCart").click(function () {
	var url="http://10.17.158.241:8081/Product/DeleteProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			id:myId,
			type:"Product"
		},
		success:function () {
			alert("清空了");
			loadList(myId);
		},
		error:function () {
			alert("清空失败")
		}
	};
		$.ajax(url,setting)
});




//全选

$("#check2").click(function () {
	if($(this).is(":checked")){
		$(".productList-int").prop("checked",true)
		allChecked();
	}
	if(!$(this).is(":checked")){
		$(".productList-int").prop("checked",false)
		$(".total span").html("0")
	}

});

$("#check1").click(function () {
	if($(this).is(":checked")){
		$(".productList-int").prop("checked",true);
		allChecked();
	}
	if(!$(this).is(":checked")){
		$(".productList-int").prop("checked",false);
		$(".total span").html("0")
	}
});


function allChecked() {
	var plusAllnum=0;
	$(".productList-div2-subtotal").each(function () {
		plusAllnum+=parseInt($(this).text())
		$(".total span").html(plusAllnum)
	})
}



