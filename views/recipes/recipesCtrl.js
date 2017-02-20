angular.module('app')
.controller('recipeCtrl', function ($scope, $stateParams, mainSvc) {

    console.log($stateParams);

    mainSvc.getRecipe($stateParams.meal, $stateParams.id)
    .then(function(response) {
        console.log(response);
        $scope.recipe = response;
    });
});