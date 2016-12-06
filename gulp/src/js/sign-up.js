/**
 * Created by Administrator on 2016/11/1.
 */

$("#top").load("../base/Top1.html");



// $(".sign-in").click(function () {
// 	$("#Sign").css("display","none");
// 	$("#Sign2").css("display","block");
// });
//
// $(".sign-up").click(function () {
// 	$("#Sign2").css("display","none");
// 	$("#Sign").css("display","block");
// });

checknum();


$("#First").bind("change",function (){
	$("#Error").css("display","none");

	if($(this).val()=="phone"){
		$("#t1").val("").attr("placeholder","请输入手机号码");

		$("#phone").css("borderColor","#e3e2e2");
		$("#Error").css("display","none");
		$("#sp1,#t2").css("borderColor","#e3e2e2");
		$("#Error1").css("display","none");
		$("#sp2,#t3").css("borderColor","#e3e2e2");
		$("#Error2").css("display","none");
		$("#Password").css("borderColor","#e3e2e2");
		$("#Message").css("display","block");
		$("#Confirm").css("borderColor","#e3e2e2");
		$("#Error3").css("display","none");
		$("#Error4").css("display","none");
		checknum()
	}
	if($(this).val()=="Email"){
		$("#t1").val("").attr("placeholder","请输入邮箱号");
		$("#phone").css("borderColor","#e3e2e2");
		$("#Error").css("display","none");
		$("#sp1,#t2").css("borderColor","#e3e2e2");
		$("#Error1").css("display","none");
		$("#Message").css("display","none");
		// $("#sp2,#t3").css("borderColor","#e3e2e2");
		$("#Error2").css("display","none");
		$("#Password").css("borderColor","#e3e2e2");
		$("#Confirm").css("borderColor","#e3e2e2");
		$("#Error3").css("display","none");
		$("#Error4").css("display","none");
		checknum()
	}
});
//点击切换手机号-邮箱



// $("#Sure")
	// .mouseenter(function () {
// 	if($("input[name='Check1']").is(":checked")){

//
//
//
//
//
//
// 		}
//
//
// 		//在这里写注册的账号上传到后台---代码
//
// 	}
// }).mouseleave(function () {
// 	$("#Sure").removeAttr("class")
// }).



$("#Sure").mousedown(function (e) {
	e.preventDefault();

	if($("input[name='Check1']").is(":checked")){

		if(flag1&&flag2&&flag3&&flag4&&flag5){
			var uName=$("#t1").val();
			var uPassword=$("#t4").val();
			var url="http://10.17.158.241:8081/Product/GetProductById_get";
			var setting={
				// type:'get',
				dataType:"jsonp",
				data:{
					id:uName,
					type:"username"
				},
				success:function (data) {

					if(data){
						alert("用户已存在")
					}else{

						var apitype={
							uName:"username",
							uPassword:"userpassword"
						};
						// $("#Sure").addClass("Sure");
						$("#Sure").css({background:"#e95053",lineHeight:"44px"}).addClass("Sure");

						var tar={
							userNmae:uName,
							userPassword:uPassword
						}
						var url="http://10.17.158.241:8081/Product/CreateUpdateProduct_get";
						var setting={
							type:"get",
							dataType:"jsonp",
							data:{
								id:uName,
								datajson:JSON.stringify(tar),
								type:apitype.uName

							},
							success:function () {
								alert("注册成功")
							},
							error:function () {
								alert("注册失败")
							},
							complete:function () {
								window.location.href="sign-in.html"
							}
						};
						$.ajax(url,setting);

















					}

				},
				error:function () {
					alert("登录失败");
				}
			};

			$.ajax(url,setting);



		//这里写要触发的事件函数


		}
	}
}).mouseup(function () {
	$("#Sure").css({background:"#e1373a",lineHeight:"40px"});
});

//确认按键   满足条件才能点击






//我是分割线~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





$(".Sure").mousedown(function (e) {
	e.preventDefault();
	$(this).css({
		lineHeight:"45px",
		background:"#ea7173"
	})
}).mouseup(function () {
	$(this).css({background:"#e1373a",lineHeight:"40px"});
});


//登录界面的确认按钮



$("#checknum").mousedown(function (e) {
	e.preventDefault();
	$(this).html("");
	checknum();
	checksign.checkNumber();
}).hover(function () {
	$(this).css("cursor","pointer")
});
//点击切换验证码












$("#t1").blur(function () {
	if($("#t1").val().length==0){
		if($("#First").val()=="phone"){
			$("#Error").css("display","block").text("请输入手机号");
			$("#phone").css("border-color","red");
		}
		// if($("#First").val()=="Email")
		else{
			$("#Error").css("display","block").text("请输入邮箱");
			$("#phone").css("border-color","red");
		}
	}
}).focus(function () {
    // if($("#t1").val()=="phone"){
    //     $(this).attr("maxlength","11");
    //     alert(1)
    // }
    // if($("#t1").val()=="Email"){
    //     $(this).attr("maxlength","");
    // }


	$(this).keyup(function () {
			if($("#First").val()=="phone") {
				checksign.phone();
				if ($("#t1").val().length == 0) {
					$("#Error").text("请输入手机号");
				}
			}
			// if($("#First").val()=="Email")
			else{
				checksign.Email();
				if($("#t1").val().length==0){
					$("#Error").text("请输入邮箱");
				}
			}

		})
	});
//验证手机号
























// $("#t1").blur(function () {
// 	if($("#t1").val().length==0){
// 		$("#Error").css("display","block").text("请输入手机号");
// 		$("#phone").css("border-color","red");
// 	}
// }).focus(function () {
// 	$(this).keyup(function () {
// 		checksign.phone();
// 		if($("#t1").val().length==0){
// 			$("#Error").css("display","block").text("请输入手机号");
// 			$("#phone").css("border-color","red");
// 		}
// 	})
// });
//验证手机号
//
// $("#t1").blur(function () {
// 	if($("#t1").val().length==0){
// 		$("#Error").css("display","block").text("请输入邮箱");
// 		$("#phone").css("border-color","red");
// 	}
// }).focus(function () {
// 	$(this).keyup(function () {
// 		checksign.Email();
// 		if($("#t1").val().length==0){
// 			$("#Error").css("display","block").text("请输入邮箱");
// 			$("#phone").css("border-color","red");
// 		}
// 	})
// });
//验证邮箱



$("#t2").blur(function () {
	// if($("#t1").val().length==0){
	// 	if($("#t2").val().length==0){
	// 		$("#sp1,#t2").css("border-color","red");
	// 	}
	// }else{
		if($("#t2").val().length==0){
			$("#Error1").css("display","block").text("请输入验证码");
			$("#sp1,#t2").css("border-color","red");
		// }
			// 这里注释的  是逻辑   上一个没输入或错误  就会提示先输入上一个


	}
}).focus(function () {
	if($("#t2").val().length==0) {
		// if($(this).val()=="phone"){
		// 	$("#Error").css("display","block").text("请输入手机号");
		// 	$("#phone").css("border-color","red");
		// }
		//
		// if($(this).val()=="Email"){
		// 	$("#Error").css("display","block").text("请输入邮箱");
		// 	$("#phone").css("border-color","red");
		// }
		//这里的this  应该改为 "#First"
		//不过我懒得改了


		// 	$("#phone").css("border-color","red");
		// }else{
		$("#Error1").css("display","block").text("请输入验证码");

	}
		$(this).keyup(function () {

				checksign.checkNumber();

			//;
		})


});
//验证码


$("#b1").on("click",function () {
	$(this).val("重新获取:10");
	$(this).css({background:"black"}).attr("disabled","true").addClass("b1");
	runTime("#b1",10);
	checkMessagenum();


});
$("#t3").blur(function () {
	if($("#t3").val().length==0){
		$("#sp2,#t3").css("borderColor","red");
		$("#Error2").css("display","block").text("请输入短信验证码")

	}

}).focus(function () {
	// if($("#t3").val().length==0){
	// 	$("#sp2,#t3").css("borderColor","red");
	// 	$("#Error2").css("display","block").text("请输入短信验证码")
	// }else{
		$(this).keyup(function () {
			checksign.checkMessage();


		});
	// }
});
//短信验证码///////////////////

















$("#t4").blur(function () {
	if($("#t4").val().length==0){
		$("#Password").css("borderColor","red");
		$("#Error3").css("display","block").text("请输入密码")
	}

}).focus(function () {
	$(this).keyup(function () {
		checksign.checkPassword();
	})
});


//密码验证

$("#t5").blur(function () {
	if($(this).val().length==0){
		$("#Confirm").css("borderColor","red");
		$("#Error4").css("display","block").text("两次密码输入不一致")
	}else{
		if($("#t4").val()==$("#t5").val()){
			$("#Password").css("borderColor","#e3e2e2");
			$("#Error3").css("display","none");
			flag5=true;
		}else{
			$("#Confirm").css("borderColor","red");
			$("#Error4").css("display","block").text("两次密码输入不一致");
			flag5=false;
		}
	}
	// alert($("#t4").val())
	// alert($("#t5").val())
}).focus(function () {
	if($("#t4").val().length==0){
		$("#Password").css("borderColor","red");
		$("#Error3").css("display","block").text("请输入密码")
	}
	$(this).keyup(function () {
		if($("#t4").val()==$("#t5").val()){
			$("#Confirm").css("borderColor","#e3e2e2");
			$("#Error4").css("display","none");
		}
	});



	// $(this).keyup(function () {
	// 	checksign.checkPassword();
	// })
});



//这里写判断条件是否满足
var flag1=false;
var flag2=false;
var flag3=false;
var flag4=false;
var flag5=false;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var checksign={
	phone:function () {
		var reg = /^1[3458]{1}[0-9]{9}$/;
		if(!reg.test($("#t1").val())){
			$("#phone").css("border-color","red");
			$("#Error").css("display","block").text("手机号输入格式有误");
			flag1=false;
		}else{
			$("#phone").css("borderColor","#e3e2e2");
			$("#Error").css("display","none");
			flag1=true;
		}
	},


	Email:function () {
		var reg= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!reg.test($("#t1").val())){
			$("#phone").css("borderColor","red");
			$("#Error").css("display","block").text("邮箱输入格式有误");
			flag1=false;
		}else{
			$("#phone").css("borderColor","#e3e2e2");
			$("#Error").css("display","none");
			flag1=true;
		}
	},

	checkNumber:function () {
		if(parseInt($("#t2").val())!==num){
			$("#sp1,#t2").css("borderColor","red");
			$("#Error1").css("display","block").text("验证码输入错误");
			flag2=false;
		}else{
			$("#sp1,#t2").css("borderColor","#e3e2e2");
			$("#Error1").css("display","none");
			flag2=true;
		}
	},

	checkMessage:function () {
		if(parseInt($("#t3").val())!==num1){
			$("#sp2,#t3").css("borderColor","red");
			$("#Error2").css("display","block").text("短信验证码输入错误");
			flag3=false;
		}else{
			$("#sp2,#t3").css("borderColor","#e3e2e2");
			$("#Error2").css("display","none");
			flag3=true;
		}
	},
	checkPassword:function () {
		var reg= /^[a-zA-Z]\w{5,19}$/;
		if(!reg.test($("#t4").val())){
			$("#Password").css("borderColor","red");
			$("#Error3").css("display","block").text("以字母开头，长度在6~20，只能包含字符、数字和下划线");
			flag4=false;
		}else{
			$("#Password").css("borderColor","#e3e2e2");
			$("#Error3").css("display","none");
			flag4=true;
		}
	}








};

var num;
function checknum() {
	num=Math.floor(Math.random()*10000);
	if(num>1000){
		$("#checknum").html(num);
	}else{
		checknum();
	}
}

var num1;
function checkMessagenum() {
	num1=Math.floor(Math.random()*10000);
	if(num1>1000){
		alert(num1)
	}else{
		checkMessagenum();
	}
}
//生成验证码







function runTime(That,time) {

	var time1=setInterval(function () {
			time--;
			$(That).val("重新获取:"+time);
			if(time==0){
				clearInterval(time1);
				$(That).removeAttr("disabled").css({background:"red"}).val("点击获取验证码")
			}
	},1000)
}
