<?php
    $arr1=array(1,2,3,4);
    $array=array(
        "name"=>"most",
        "love"=>"most and most"
    );
    class Person{
        function __construct($name){
            $this->name=$name;
        }

        function show(){
            echo $this->name;
        }
    }
    $p=new Person("most");
    echo $p->name."<br/>";
    $p->name="mostLove";
    $p->show();
//    echo json_encode($array["name"].":"."<br/>"."&nbsp;".$array["love"]);
//    echo json_encode($array);    //输出成json格式
?>