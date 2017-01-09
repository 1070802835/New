<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .btn1{
            display: block;
            width:300px;
            height:50px;
            line-height: 50px;
            text-align: center;
            background: -webkit-linear-gradient(left,#D695FF,#53FFEB);
            margin: 20px auto;
            border-radius: 20px;
            transition: all .1s linear;
            border:0;
        }
        .btn1:active{
            transform: translateY(6px);
        }
        .btn1:focus{
            outline:none;
        }
        .op1{
            display: inline-block;
            width:30%;
            height:50px;
            line-height: 50px;
            text-align: center;
            margin: 20px 0;
            border-radius: 20px;
            transition: all .1s linear;
            background: -webkit-linear-gradient(left,#C742FF,#FFB424);
            border:0;
        }
    </style>
</head>
<body>
    <button class="btn1" onClick="tan()">
        <?php
            echo "点我点我 ! "
        ?>
    </button>
    <h1 <?php echo "class=op1" ?>></h1>
    <script>
        function tan(){
            setInterval(function(){
                let oP1=document.createElement("op1");
                oP1.innerHTML="点你妹";
                oP1.setAttribute("class","op1")
                document.body.appendChild(oP1)
            },1000)


        }
    </script>
</body>
</html>