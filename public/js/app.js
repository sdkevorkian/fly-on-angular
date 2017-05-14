console.log('angular here');

var app = angular.module('AirplaneApp', ["AirplanesControllers", "ui.router"]);

// location provide gets rid of the # in route
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('airplanes', {
                url: '/',
                templateUrl: 'app/airplanes.html',
                controller: 'AirplanesCtrl'
            })
            .state('airplaneShow', {
                url: '/airplanes/:id',
                templateUrl: 'app/airplaneShow.html',
                controller: 'AirplaneShowCtrl'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/404.html'
            });

        // this removes # in browser url
        $locationProvider.html5Mode(true);
    }
]);
