(function () {

    var app = angular.module('app', ['ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/index.html',
                controller: 'MainMenuController'
            });
            $routeProvider.when('/2', {
                templateUrl: 'templates/Beers.html',
                controller: 'BeersController'
            });
            $routeProvider.otherwise({ redirectTo: 'app/' });
            $locationProvider.html5Mode(true);
        });
})();