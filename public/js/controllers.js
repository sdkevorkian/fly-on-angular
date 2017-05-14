var controllers = angular.module('AirplanesControllers', ['AirplaneServices']);

controllers.controller('AirplanesCtrl', ['$scope', 'Airplane', function($scope, Airplane) {
    console.log('in airplanes ctrl');
    Airplane.showAllPlanes().then(function(res) {
        $scope.airplanes = res.data;
        console.log($scope.airplanes);
    }).catch(function(err) {
        console.log(err);
    });
}]);

controllers.controller('AirplaneShowCtrl', ['$scope', '$stateParams', 'Airplane',
    function($scope, $stateParams, Airplane) {
        console.log('in show ctrl');
        $scope.airplane = {};
        Airplane.showPlane($stateParams.id).then(function(res) {
            $scope.airplane = res.data;
            console.log($scope.airplane);
        }).catch(function(err) {
            console.log(err);
        });
    }
]);
