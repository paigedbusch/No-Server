angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    })
    .state('breakfast', {
        url: '/breakfast',
        templateUrl: './views/breakfast/breakfast.html',
        controller: 'breakfastCtrl'
    })
    .state('lunch', {
        url: '/lunch',
        templateUrl: './views/lunch/lunch.html',
        controller: 'lunchCtrl'
    })
    .state('dinner', {
        url: '/dinner',
        templateUrl: './views/dinner/dinner.html',
        controller: 'dinnerCtrl'
    })
    .state('dessert', {
        url: '/dessert',
        templateUrl: './views/dessert/dessert.html',
        controller: 'dessertCtrl'
    })
    .state('recipe', {
        url: '/recipes/:meal/:id',
        templateUrl: './views/recipes/recipes.html',
        controller: 'recipeCtrl'
    });

    $urlRouterProvider
    .otherwise('/home');
})