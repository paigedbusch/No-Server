angular.module('app')
.controller('lunchCtrl', function($scope, mainSvc) {

    $scope.meal = 'lunch';

    mainSvc.getLunch()
    .then(function(response) {
        console.log(response.data);
        $scope.lunch = response.data;
    });
});