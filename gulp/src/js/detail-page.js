
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
//获取的cookie用户名   格式是var a=getMycookie();


$(".right-button1").click(function () {
	var ran=Math.floor(Math.random()*60);
	var ran1=Math.floor(Math.random()*60);
	var ran2=Math.floor(Math.random()*60);
	var url="json/detail-List.json";
	var arr=[];
	var setting={
		dataType:'json',
		success:function (data) {
			var dat=data[1].list[ran];
			var dat1=data[1].list[ran1];
			var dat2=data[1].list[ran2];
			var detaillist={list:[
				{sr:dat.sr,productPrice:dat.productPrice},
				{sr:dat1.sr,productPrice:dat1.productPrice},
				{sr:dat2.sr,productPrice:dat2.productPrice}
			]};
			console.log(detaillist);


			var html=template("detailMain-right",detaillist);
			console.log(detaillist);
			$(".detailMian-right-main").html(html)

		}
	};
	$.ajax(url,setting);
});


$(".right-button2").click(function () {
	var ran=Math.floor(Math.random()*60);
	var ran1=Math.floor(Math.random()*60);
	var ran2=Math.floor(Math.random()*60);
	var url="json/detail-List.json";
	var arr=[];
	var setting={
		dataType:'json',
		success:function (data) {
			var dat=data[1].list[ran];
			var dat1=data[1].list[ran1];
			var dat2=data[1].list[ran2];
			var detaillist={list:[
				{sr:dat.sr,productPrice:dat.productPrice},
				{sr:dat1.sr,productPrice:dat1.productPrice},
				{sr:dat2.sr,productPrice:dat2.productPrice}
			]};
			console.log(detaillist);


			var html=template("detailMain-right",detaillist);
			console.log(detaillist);
			$(".detailMian-right-main").html(html)

		}
	};
	$.ajax(url,setting);
});


$(".detailMain2-left").click(function () {
	endBuy();
});
$(".detailMain2-right").click(function () {
	endBuy();
});
endBuy();
function endBuy() {
	var ran=Math.floor(Math.random()*60);
	var ran1=Math.floor(Math.random()*60);
	var ran2=Math.floor(Math.random()*50);
	var ran3=Math.floor(Math.random()*60);
	var ran4=Math.floor(Math.random()*60);
	var url="json/detail-List.json";
	var setting={
		dataType:'json',
		success:function (data) {
			var dat=data[0].list[ran];
			var dat1=data[1].list[ran1];
			var dat2=data[2].list[ran2];
			var dat3=data[0].list[ran3];
			var dat4=data[1].list[ran4];
			var detaillist={list:[
				{
					sr:dat.sr,
					productNmae:dat.productNmae,
					productPrice:dat.productPrice,
					usedPrice:dat.usedPrice

				},
				{
					sr:dat1.sr,
					productNmae:dat1.productNmae,
					productPrice:dat1.productPrice,
					usedPrice:dat1.usedPrice

				},
				{
					sr:dat2.sr,
					productNmae:dat2.productNmae,
					productPrice:dat2.productPrice,
					usedPrice:dat2.usedPrice

				},
				{
					sr:dat3.sr,
					productNmae:dat3.productNmae,
					productPrice:dat3.productPrice,
					usedPrice:dat3.usedPrice

				},
				{
					sr:dat4.sr,
					productNmae:dat4.productNmae,
					productPrice:dat4.productPrice,
					usedPrice:dat4.usedPrice

				}

			]};
			var html=template("endingBuy",detaillist);
			// console.log(detaillist);
			$(".endingBuy").html(html)

		}
	};
	$.ajax(url,setting);
}

//通过location.href获取来的id，  取到商品信息   然后push到一个空数组里面
//因为详情页只有一个商品的详情，所以   不需要属性，  直接each到属性值就可以了
// 就是说each到一个数组arr，然后把value[i]填到相应的位置就可以了
//eg:	var obj = {list:arr};
// 		var html = template("#", obj);



xl();
var Href;
function xl(){
	var str=location.href;
	Href=str.split("?")[1];
	//此时Href就是取回的ID   是数字类型的
	// alert(Href);
	var url="json/detail-List.json";
	var Id=0;
	var setting={
		dataType:"json",
		success:function (data) {
			var arr=data[0].list;
			$.each(arr,function (index) {
				if(this.hreflang){
					Id=parseInt(this.hreflang);
					if(Id==Href){
						var productSr=this.sr;
						var productNmae=this.productNmae;
						$("title").text(productNmae);
						var productPrice=this.productPrice;

						var html3=template("little",data[0].list[index]);
						$("#artemp2").html(html3);

						var html1=template("detailBottom",data[0].list[index]);
						$("#detail-bottom1").html(html1);


						Most();
						$(".addCart").click(function () {
							if(!$.cookie("flag")){
								alert("请先登录")
							}else{
								if($(".b2").html().length<1){
									alert("请选择尺码")
								}else{
									var productColor=$(".b1").text();
									var productSize=$(".b2").text();
									var productCount=$(".mostBuy input").val();
									var item= {
										"sr": productSr,
										"Name": productNmae,
										"price": productPrice,
										"color": productColor,
										"size": productSize,
										"count": productCount
									};
									getProduct(item);
								}
							}
						});



					}
				}
			});

		},
		error:function () {
			alert("失败")
		},
		complete:function () {


		}
	};
	$.ajax(url,setting)
}


detailBottom();
function detailBottom() {
	var arr1=[
		{"sr":"01"},
		{"sr":"02"},
		{"sr":"03"},
		{"sr":"04"},
		{"sr":"05"},
		{"sr":"06"},
		{"sr":"07"},
		{"sr":"08"},
		{"sr":"09"},
		{"sr":"10"},
		{"sr":"11"},
		{"sr":"12"},
		{"sr":"13"},
		{"sr":"14"},
		{"sr":"15"},
		{"sr":"16"}
	];

	var obj1={list:arr1};

}


evaluation();
function evaluation(){
	var url="json/evaluation.json";
	var set={
		dataType:"json",
		success:function (data){
			var html2=template("evaluation",data);
			$(".evaluate3").html(html2);
			$(".productEvaluate-a").click(function () {
				$(this).children().first().text("已赞").next().text("(1)");
			})


		}
	};
	$.ajax(url,set)
}
$(".KKK ul li").eq(0).click(function () {
	$("#detail-bottom1").css("display","block");
	$("#detail-bottom2").css("display","none");
});

$(".KKK ul li").eq(1).click(function () {
	$("#detail-bottom2").css("display","block");
	$("#detail-bottom1").css("display","none");
});









//下面就是template出来的东西要绑定的事件



function Most() {
	$(".glass").mousemove(function (e) {
		var x1=e.offsetX-75;
		var y1=e.offsetY-70;
		x1 = Math.max(0,Math.min(x1,$(".glass").width()-$(".little-glass").width()));
		y1 = Math.max(0,Math.min(y1,$(".glass").height()-$(".little-glass").height()));
		$(".little-glass").css({
			'display':'block',
			'left':x1+'px',
			'top':y1+'px'
		});

		$(".detailMian-left-glass").css({
			'display':'block'
		});
		var percentx=x1/($(".glass").width()-$(".little-glass").width());
		var percenty=y1/($(".glass").height()-$(".little-glass").height());

		var x2=($(".detailMian-left-img1").width()-$(".detailMian-left-glass").width())*percentx;
		var y2=($(".detailMian-left-img1").height()-$(".detailMian-left-glass").height())*percenty;
		$(".detailMian-left-img1").css({
			'left':-x2+'px',
			'top':-y2+'px'
		});
	}).mouseout(function () {
		$(".little-glass").css('display','none');
		$(".detailMian-left-glass").css({
			'display':'none'
		});
	});
	$(".detailMian-left-ul li").mouseenter(function () {
		$(this).css('borderColor','red').siblings().css('borderColor','#ddd');
		var Index=$(this).index()+1;
		$(".detailMian-left-img").attr('src','images/detail/'+Href+Index+'.jpg')
		$(".detailMian-left-img1").attr('src','images/detail/big'+Href+Index+'.jpg')

	});


	for(var i=0;i<12;i++){
		$(".shareDiv span").eq(i).css({
			backgroundPosition:i*-16+'px '+'0px'
		})
	}

	$(".detail-share-ul-li1").hover(function () {
		$(".shareDiv").css({
			display:'block'
		})
	},function () {
		$(".shareDiv").css({
			display:'none'
		})
	});













	$(".buyColor img").click(function () {
		$(".buyColor img").css("border","1px solid white");
		$(this).css({
			border:'1px solid red'
		});
		$(".mostBuy .b1").html($(this).attr('alt'))

	});

	var flag3=false;
	$(".buySize ul li").click(function () {
		flag3=true;
		$(this).css("border","1px solid red").siblings().css("border","1px solid #ddd");
		$(".mostBuy .b2").html($(this).html())
	});

	var Num=1;
	$(".mostBuy").children().first().mousedown(function () {
		Num=parseInt($(this).next().val());
		Num--;
		if(Num<=1){
			$(this).next().val(0);
			Num=1;
		}else{
			$(this).next().val(Num);
		}

	});
	$(".fk").mousedown(function () {
		Num=parseInt($(this).prev().val());
		Num++;
		$(this).prev().val(Num);
	});
	$(".buyNow").hover(function () {
		$(this).css('background','red').css('color','white')
	},function () {
		$(this).css('background','white').css('color','#e60012')
	});
	$(".KKK ul li").eq(0).css({
		'background':'#cc0011',
		'border':'1px solid #cc0011',
		'color':'white'
	});
	$(".KKK ul li").click(function () {
		$(this).css({
			'background':'#cc0011',
			'border':'1px solid #cc0011',
			'color':'white'
		}).siblings().css({
			'background':'#fff',
			'border':'1px solid #ccc',
			'color':'#000'
		})
	});



}


function getProduct(item) {
	var url="http://10.17.158.241:8081/Product/GetProductById_get";
	var setting={
		dataType:"jsonP",
		data:{
			Id:getMycookie(),
			type:"Product"
		},
		success:function (data) {
			if(!data){
				var arrProduct=[];
				arrProduct.push(item);
				updateProduct(arrProduct);
			}else{
				var str=JSON.parse(data.Data);
				var istrue=false;
				$.each(str,function () {
					// console.log(this);
					if(this.Name==item.Name){
						if(this.color==item.color&&this.size==item.size){
							this.count=parseInt(item.count)+parseInt(this.count);
							istrue=true;
							updateProduct(str);
						}
					}
				});
				if(!istrue){
					str.push(item);
					updateProduct(str);
				}
			}
		},
		complete:function (data) {
		}
	};
	$.ajax(url,setting)
}

function updateProduct(item){
	var url="http://10.17.158.241:8081/Product/CreateUpdateProduct_post";
	var setting={
		type:"post",
		data:{
			Id:getMycookie(),
			datajson:JSON.stringify(item),
			type:"Product"
		},
		success:function (data) {
			var a=data.Data;
		},
		error:function () {
			// alert("加入购物车失败!")
		},
		complete:function () {
			alert("加入购物车成功!");
			getCount();
		}
	};
	$.ajax(url,setting)
}


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



