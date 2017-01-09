

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<p>name : <?php echo isset($_POST["name"])?$_POST["name"]:""; ?></p>
<p>name : <?php echo isset($_POST["email"])?$_POST["email"]:"most"; ?></p>



<!--isset() 检测是否有这个属性-->
</body>
</html>