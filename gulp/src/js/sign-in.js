$("#top").load("../base/Top1.html");
var flag0=false;
var flag1=false;
$(".Sure").click(function () {
	if($("#pnm1").val().length==0){
		$("#pnm1").css({
			border:"1px solid red"
		});
		$(".most1").css("display","block");
		flag0=false;
	}else{
		$("#pnm1").css({
			border:"1px solid #e3e2e2"
		});
		$(".most1").css("display","none");
		flag0=true;

	}
	if($("#pnm2").val().length==0){
		$("#pnm2").css({
			border:"1px solid red"
		});
		$(".most2").css("display","block");
		flag1=false;
	}else{
		$("#pnm2").css({
			border:"1px solid #e3e2e2"
		});
		$(".most2").css("display","none");
		flag1=true;
	}

	if(flag0&&flag1){
		// alert(1)
		var uNmae=$("#pnm1").val();
		var uPassword=$("#pnm2").val();

		var url="http://10.17.158.241:8081/Product/GetProductById_get";
		var setting={
			type:'get',
			dataType:"jsonp",
			data:{
				id:uNmae,
				type:"username"
			},
			success:function (data) {

				if(!data){
					alert("用户名不存在")
				}
				if(data){
					// a.userPw==$("#t2").val()

					var Data1=JSON.parse(data.Data);


					if(Data1.userNmae==$("#pnm1").val()&&Data1.userPassword==$("#pnm2").val()){
						alert("登录成功");
						$.cookie("flag","1",{expires:14,path:"/"})
						// if($.cookie("user")){
						// 	var obj = JSON.parse($.cookie("user"));
						// }else{
						// 	var obj ={}
						// }
						var obj=$.cookie("user")?JSON.parse($.cookie("user")):{};

						if(obj.index){
							var num = obj.index;
						}else{
							var num = 0;
						}
						obj.index = ++num;
						obj[uNmae] = num;
						// alert(obj[uNmae]);
						var str=JSON.stringify(obj);
						if($("#kksb").is(":checked")){
							$.cookie("user",str,{expires:14,path:"/"});
							var loc=location.href.split("?");
							if(loc[1]){
								if(loc[2]){
									window.location.href="../"+loc[1]+"?"+loc[2];
								}else{
									window.location.href="../"+loc[1];
								}
							}else{
								window.location.href="../index.html"
								// alert(1)
							}
						}else{
							$.cookie("user",str,{expires:1,path:"/"});
							var loc=location.href.split("?");
							if(loc[1]){
								if(loc[2]){
									window.location.href="../"+loc[1]+"?"+loc[2];
								}else{
									window.location.href="../"+loc[1];
								}
							}else{
								window.location.href="../index.html"
								// alert(1)
							}


						}



					}else{
						alert("用户名或密码错误");
						$("#pnm1").css({
							border:"1px solid red"
						});
						$(".most1").css("display","none");


						$("#pnm2").css({
							border:"1px solid red"
						}).val("");
						$(".most2").css("display","none");
					}
				}
			},
			error:function () {
				alert("登录失败");
			}
		};

		$.ajax(url,setting);
	}


});