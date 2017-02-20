angular.module('app')
.controller('dinnerCtrl', function($scope, mainSvc) {

    $scope.meal = 'dinner';

    mainSvc.getDinner()
    .then(function(response) {
        console.log(response.data);
        $scope.dinner = response.data;
    });
});