(function () {

    var app = angular.module('laureneApp', []);
    app.controller('ShowPageController', function ($scope, $routeParams) {
        $scope.menuId = $routeParams.menuId;
    });


})();