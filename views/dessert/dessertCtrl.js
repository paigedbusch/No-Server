angular.module('app')
.controller('dessertCtrl', function($scope, mainSvc) {

    $scope.meal = 'dessert';

    mainSvc.getDessert()
    .then(function(response) {
        console.log(response.data);
        $scope.dessert = response.data;
    });
});