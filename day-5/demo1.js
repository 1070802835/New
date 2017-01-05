<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>
		// var obj={}; 
// var obj=new Object();
// function fn() {
			
// };
// new fn();
// function fn1(params){
// 	var obj=new Object();
// 	obj.params=params;
// 	return obj
// };
// fn1(params);
clock();
function clock(){
	this.hours=12;
	this.mins=34;
	this.go();
	this.come();
};
clock.prototype={
	go:function(){
		console.log(1)
	},
	come:function(){
		console.log(2)
	}
}
	</script>
</body>
</html>
