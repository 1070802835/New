angular.module("most2",[]).directive("myFooter",function () {
    return {
        restrict:"EACM",
        templateUrl:'common/footer.html',
        replace:true,
        scope:{
            active:"@sound"
        },
        controller:function ($scope) {
            $scope.titleName=["首页","分类","列表","购物车","我的"];
            console.log($scope.active)
        }
    }
}).directive("myHeader",function () {
    return {
        restrict:"EACM",
        templateUrl:'common/header.html',
        replace:true
    }
});
