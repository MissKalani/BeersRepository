(function () {

    var app = angular.module('laureneApp', []);
    app.controller('BeersController', function ($scope, $location) {
    	$scope.header = "Beers Page";
    });
    
})();