(function () {

    var app = angular.module('laureneApp', ['ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/', {
                templateUrl: 'index.html',
                controller: 'MainMenuController'
            });
            $routeProvider.when('/2', {
                templateUrl: 'templates/Beers.html',
                controller: 'BeersController'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
            $locationProvider.html5Mode(true);
        });
})();