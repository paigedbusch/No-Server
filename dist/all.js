'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('breakfast', {
        url: '/breakfast',
        templateUrl: './views/breakfast/breakfast.html',
        controller: 'breakfastCtrl'
    }).state('lunch', {
        url: '/lunch',
        templateUrl: './views/lunch/lunch.html',
        controller: 'lunchCtrl'
    }).state('dinner', {
        url: '/dinner',
        templateUrl: './views/dinner/dinner.html',
        controller: 'dinnerCtrl'
    }).state('dessert', {
        url: '/dessert',
        templateUrl: './views/dessert/dessert.html',
        controller: 'dessertCtrl'
    }).state('recipe', {
        url: '/recipes/:meal/:id',
        templateUrl: './views/recipes/recipes.html',
        controller: 'recipeCtrl'
    });

    $urlRouterProvider.otherwise('/home');
});
angular.module('app').controller('breakfastCtrl', function ($scope, $stateParams, mainSvc) {

    $scope.meal = 'breakfast';

    mainSvc.getBreakfast($stateParams.meal, $stateParams.id).then(function (response) {
        console.log(response.data);
        $scope.breakfast = response.data;
    });
});
angular.module('app').controller('dessertCtrl', function ($scope, mainSvc) {

    $scope.meal = 'dessert';

    mainSvc.getDessert().then(function (response) {
        console.log(response.data);
        $scope.dessert = response.data;
    });
});
angular.module('app').controller('dinnerCtrl', function ($scope, mainSvc) {

    $scope.meal = 'dinner';

    mainSvc.getDinner().then(function (response) {
        console.log(response.data);
        $scope.dinner = response.data;
    });
});
angular.module('app').controller('homeCtrl', function ($scope, $stateParams, mainSvc) {

    if ($stateParams.id === 'breakfast') {
        $scope.getBreakfast = mainSvc.getBreakfast();
    } else if ($stateParams.id === 'lunch') {
        $scope.getLunch = mainSvc.getLunch();
    } else if ($stateParams.id === 'dinner') {
        $scope.getDinner = mainSvc.getDinner();
    } else if ($stateParams.id === 'dessert') {
        $scope.getDessert = mainSvc.getDessert();
    }
});
angular.module('app').controller('lunchCtrl', function ($scope, mainSvc) {

    $scope.meal = 'lunch';

    mainSvc.getLunch().then(function (response) {
        console.log(response.data);
        $scope.lunch = response.data;
    });
});
angular.module('app').controller('recipeCtrl', function ($scope, $stateParams, mainSvc) {

    console.log($stateParams);

    mainSvc.getRecipe($stateParams.meal, $stateParams.id).then(function (response) {
        console.log(response);
        $scope.recipe = response;
    });
});
angular.module('app').directive('recipeDirective', function () {
    return {
        templateUrl: './views/recipes/recipesTmpl.html'
    };
});
angular.module('app').controller('mainCtrl', function ($scope, $stateParams, mainSvc) {});
angular.module('app').service('mainSvc', function ($http) {

    this.getBreakfast = function () {
        return $http.get('./jsondata/breakfast.json');
    };
    this.getLunch = function () {
        return $http.get('./jsondata/lunch.json');
    };
    this.getDinner = function () {
        return $http.get('./jsondata/dinner.json');
    };
    this.getDessert = function () {
        return $http.get('./jsondata/dessert.json');
    };
    this.getRecipe = function (meal, id) {
        return $http.get('./jsondata/' + meal + '.json').then(function (response) {
            return response.data.filter(function (item) {
                if (item.id == id) return item;
            });
        });
    };
});