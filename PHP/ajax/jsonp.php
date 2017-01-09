<?php
    $backName=isset($_GET["callback"])?$_GET["callback"]:"callback";
    $array=array(
        "name"=>"most",
        "like"=>"most1",
        "love"=>"most2"
    );
    $data=json_encode($array);
    echo "$backName($data)"
?>