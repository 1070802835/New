
<?php
    header('Access-Control-Allow-Origin:*');
    header('Content-type:text/json');
    $userName=isset($_GET["username"])?$_GET["username"]:"";
    $userPassword=isset($_GET["userPassword"])?$_GET["userPassword"]:"";
    $person=array(
        "username"=>$userName,
        "userPassword"=>$userPassword
    );
    echo json_encode($person);
?>