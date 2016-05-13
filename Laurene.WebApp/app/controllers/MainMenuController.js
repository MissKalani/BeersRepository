(function () {

    var app = angular.module('laureneApp', ['ngMaterial']);
    app.controller('MainMenuController', function ($scope, $mdSidenav, $location) {
        
        $scope.menuList = [{
            id: 1,
            title: "Home",
            description: "This is my home!",           
        },
        {
            id: 2,
            title: "Beers",
            description: "What is it really about?",           
        }
        ];   

        $scope.toggleLeftMenu = function () {
            $mdSidenav('left').toggle();          
        };

        $scope.openPage = function (id) {
            console.log($location.url('/'+id));
            $location.url('/'+id)       
        }
    });


})();