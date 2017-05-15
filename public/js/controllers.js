var controllers = angular.module('AirplanesControllers', ['AirplaneServices']);

controllers.controller('AirplanesCtrl', ['$scope', 'Airplane', function($scope, Airplane) {
    console.log('in airplanes ctrl');

    $scope.listAll = function() {
        Airplane.showAllPlanes().then(function(res) {
            $scope.airplanes = res.data;
            console.log($scope.airplanes);
        }).catch(function(err) {
            console.log(err);
        });
    };

    $scope.listAll();

    $scope.searchPlanes = function() {
        console.log($scope.searchForPlane);
        $scope.airplanes = $scope.airplanes.filter(function(plane) {
            return (plane.model.includes($scope.searchForPlane) || plane.manufacturer.includes($scope.searchForPlane));
        });
        console.log($scope.airplanes);
    };

}]);

controllers.controller('AirplaneShowCtrl', ['$scope', '$stateParams', 'Airplane', '$state',
    function($scope, $stateParams, Airplane, $state) {
        console.log('in show ctrl');
        $scope.airplane = {};
        Airplane.showPlane($stateParams.id).then(function(res) {
            $scope.airplane = res.data;
            console.log($scope.airplane);
        }).catch(function(err) {
            console.log(err);
        });


        $scope.updatePlane = function() {
            // not updating data
            console.log($scope.airplane);
            Airplane.editPlane($stateParams.id, $scope.airplane).then(function(res) {
                console.log(res);
                $state.go('airplaneShow', { id: $stateParams.id });
            }).catch(function(err) {
                console.log(err);
            });
        };

        $scope.deletePlane = function() {
            console.log($stateParams.id);
            Airplane.deletePlane($stateParams.id).then(function(res) {
                console.log(res);
                $state.go('airplanes');
            }).catch(function(err) {
                console.log(err);
            });
        };

    }
]);
