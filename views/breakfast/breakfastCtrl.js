angular.module('app')
.controller('breakfastCtrl', function($scope, $stateParams, mainSvc) {

    $scope.meal = 'breakfast';

    mainSvc.getBreakfast($stateParams.meal, $stateParams.id)
    .then(function(response) {
        console.log(response.data);
        $scope.breakfast = response.data;
    });
});