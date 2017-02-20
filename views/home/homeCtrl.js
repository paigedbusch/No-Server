angular.module('app')
.controller('homeCtrl', function($scope, $stateParams, mainSvc) {

    if ($stateParams.id === 'breakfast') {
        $scope.getBreakfast = mainSvc.getBreakfast();
    }
    else if ($stateParams.id === 'lunch') {
        $scope.getLunch = mainSvc.getLunch();
    }
    else if ($stateParams.id === 'dinner') {
        $scope.getDinner = mainSvc.getDinner();
    }
    else if ($stateParams.id === 'dessert') {
        $scope.getDessert = mainSvc.getDessert();
    }
});