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
        editPlane: function(airplane) {
            // plane is undefined

            return $http.put('/api/airplanes/' + airplane._id, airplane);
        }

    };
}]);
