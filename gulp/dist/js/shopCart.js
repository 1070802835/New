function checkCookie(){if($.cookie("user")){var t=JSON.parse($.cookie("user")),e=[];$.each(t,function(t){"index"!=t&&e.push(t)});for(var n=0;n<e.length-1;n++)for(var i=0;i<e.length-1;i++)if(t[e[n]]<t[e[n+1]]){var r=e[n];e[n]=e[n+1],e[n+1]=r}$("#uName").text(e[0]),myId=e[0],loadList(e[0]),$("#ul-mid").css("display","none")}else $("#ul-mid").css("display","block"),$("#ul-l-m").css("display","none")}function loadList(t){var e="http://10.17.158.241:8081/Product/GetProductById_get",n={dataType:"jsonp",data:{Id:t,type:"Product"},success:function(t){if(t){var e=JSON.parse(t.Data),n={list:e},i=template("list",n);$("#productList").html(i),$(".productList-in1").click(function(){var t=$(this).parent().parent().index();$(this).next().val(parseInt($(this).next().val())-1),$(this).next().val()<=0?(deleteLine(t),$(this).parent().parent().remove(),$(".total span").html(parseInt($(".total span").html())-parseInt($(this).parent().parent().children(".productList-div2-price").html()))):($(this).parent().parent().children().first().is(":checked")?($(".total span").html(parseInt($(".total span").html())-parseInt($(this).parent().parent().children(".productList-div2-price").html())),deleteoneProduct(t),$(this).parent().parent().children().first().prop("checked")):deleteoneProduct(t),$(this).parent().parent().children(".productList-div2-subtotal").html(parseInt($(this).next().val())*parseInt($(this).parent().parent().children(".productList-div2-price").html())))}),$(".productList-in3").click(function(){var t=$(this).parent().parent().index();$(this).prev().val(parseInt($(this).prev().val())+1),$(this).parent().parent().children().first().is(":checked")?($(".total span").html(parseInt($(".total span").html())+parseInt($(this).parent().parent().children(".productList-div2-price").html())),addoneProduct(t),$(this).parent().parent().children().first().prop("checked")):addoneProduct(t),$(this).parent().parent().children(".productList-div2-subtotal").html(parseInt($(this).parent().parent().children(".productList-div2-subtotal").html())+parseInt($(this).parent().parent().children(".productList-div2-price").html()))}),$(".deleteLine").click(function(){var t=$(this).parent().parent().index();deleteLine(t),$(this).parent().parent().remove();var e=$(this).parent().parent().children(".productList-div2-subtotal").html();$(this).parent().parent().children(".productList-int").is(":checked")&&$(".total span").html(parseInt($(".total span").html())-parseInt(e))}),$(".productList-int").click(function(){if($(this).is(":checked")){var t=$(this).parent().children(".productList-div2-subtotal").html();$(".total span").html(parseInt($(".total span").html())+parseInt(t))}if(!$(this).is(":checked")){var e=$(this).parent().children(".productList-div2-subtotal").html();$(".total span").html(parseInt($(".total span").html())-parseInt(e))}}),$(".productList-in2").blur(function(){var t=$(this).parent().parent().index(),e=parseInt($(this).val());changeCount(t,e);var n=parseInt($(this).parent().next().html());$(this).parent().next().html(parseInt($(this).parent().prev().html()*e));var i=parseInt($(this).parent().next().html());$(this).parent().parent().children(".productList-int").is(":checked")&&$(".total span").html(parseInt($(".total span").html())-(n-i))})}else $("#productList").html("<div style='width: 100%;height: 300px;color: red;text-align: center;line-height: 300px;font-size: 20px;'>你的购物车空啦!快滚去买东西!!</div>")}};$.ajax(e,n)}function deleteoneProduct(t){var e="http://10.17.158.241:8081/Product/GetProductById_get",n={dataType:"jsonp",data:{Id:myId,type:"Product"},success:function(e){var n=JSON.parse(e.Data);n[t].count=parseInt(n[t].count)-1,upDate(n)}};$.ajax(e,n)}function addoneProduct(t){var e="http://10.17.158.241:8081/Product/GetProductById_get",n={dataType:"jsonp",data:{Id:myId,type:"Product"},success:function(e){var n=JSON.parse(e.Data);n[t].count=parseInt(n[t].count)+1,upDate(n)}};$.ajax(e,n)}function deleteLine(t){var e="http://10.17.158.241:8081/Product/GetProductById_get",n={dataType:"jsonp",data:{Id:myId,type:"Product"},success:function(e){var n=JSON.parse(e.Data);n.splice(t,1),upDate(n)}};$.ajax(e,n)}function changeCount(t,e){var n="http://10.17.158.241:8081/Product/GetProductById_get",i={dataType:"jsonp",data:{Id:myId,type:"Product"},success:function(n){var i=JSON.parse(n.Data);i[t].count=e,upDate(i)}};$.ajax(n,i)}function upDate(t){var e="http://10.17.158.241:8081/Product/CreateUpdateProduct_get",n={type:"get",dataType:"jsonp",data:{Id:myId,datajson:JSON.stringify(t),type:"Product"},success:function(t){},error:function(){},complete:function(){}};$.ajax(e,n)}function allChecked(){var t=0;$(".productList-div2-subtotal").each(function(){t+=parseInt($(this).text()),$(".total span").html(t)})}$("#a1").click(function(){var t=location.href.split("/")[4];$(this).attr("href","html/sign-in.html?"+t)}),$.cookie("flag")?checkCookie():($("#ul-mid").css("display","block"),$("#ul-l-m").css("display","none"));var myId;$("#ul-right li").eq(2).hover(function(){$("#gg").slideDown("fast"),$(this).css({background:"white",border:"1px solid #dfdedf",borderBottom:0})},function(){$("#gg").css("display","none"),$(this).css({background:"#f3f3f5",border:"1px solid #f3f3f5",borderBottom:0})}),$("#ul-right li").eq(3).hover(function(){$("#gd").slideDown("fast").css({background:"white"}),$(this).css({background:"white",border:"1px solid #dfdedf",borderBottom:0})},function(){$("#gd").css("display","none"),$(this).css({background:"#f3f3f5",border:"1px solid #f3f3f5",borderBottom:0})}),$("#yg").hover(function(){$(this).stop().css({background:"white",border:"1px solid #dfdedf",borderBottom:0}).animate({height:"64px"},300)},function(){$(this).stop().css({background:"#f3f3f5",border:"1px solid #f3f3f5",borderBottom:0}).animate({height:"28px"},200)}),$("#ul-left li").eq(1).hover(function(){$(this).children().css("font-size","12px").html("Seoul Station")},function(){$(this).children().css("font-size","1vw").html("首尔站")}),$("#ul-left li").eq(2).hover(function(){$("#Code").slideDown("fast"),$(this).css({background:"white",border:"1px solid #dfdedf",borderBottom:0})},function(){$("#Code").css("display","none"),$(this).css({background:"#f3f3f5",border:"1px solid #f3f3f5",borderBottom:0})}),$("#top2-right-shop").hover(function(){$(this).css("borderBottom",0),$("#top2-right-shop2").slideDown("fast")},function(){$(this).css("borderBottom","1px solid #d1d3d4"),$("#top2-right-shop2").css("display","none")}),$("#signOut").click(function(){$.cookie("flag","1",{expires:-1,path:"/"}),window.location.reload()}),$(".deleteCart").click(function(){var t="http://10.17.158.241:8081/Product/DeleteProductById_get",e={dataType:"jsonp",data:{id:myId,type:"Product"},success:function(){alert("清空了"),loadList(myId)},error:function(){alert("清空失败")}};$.ajax(t,e)}),$("#check2").click(function(){$(this).is(":checked")&&($(".productList-int").prop("checked",!0),allChecked()),$(this).is(":checked")||($(".productList-int").prop("checked",!1),$(".total span").html("0"))}),$("#check1").click(function(){$(this).is(":checked")&&($(".productList-int").prop("checked",!0),allChecked()),$(this).is(":checked")||($(".productList-int").prop("checked",!1),$(".total span").html("0"))});