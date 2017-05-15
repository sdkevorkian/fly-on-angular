var services = angular.module('AirplaneServices', []);

services.factory('Airplane', ['$http', function($http) {

    return {
        showPlane: function(id) {
            return $http.get('/api/airplanes/' + id);
        },
        showAllPlanes: function() {
            var req = {
                url: '/api/airplanes',
                method: 'GET'
            };
            return $http(req);
        },
        editPlane: function(id, airplane) {
            // plane is undefined
            console.log('this is my' + airplane);
            return $http.put('/api/airplanes/' + id, airplane);
        }

    };
}]);
