angular.module('app')
.service('mainSvc', function($http) {

    this.getBreakfast = function() {
        return $http.get('./jsondata/breakfast.json');
    };
    this.getLunch = function() {
        return $http.get('./jsondata/lunch.json');
    };
    this.getDinner = function() {
        return $http.get('./jsondata/dinner.json');
    };
    this.getDessert = function() {
        return $http.get('./jsondata/dessert.json');
    };
    this.getRecipe = function(meal, id) {
        return $http.get(`./jsondata/${meal}.json`)
        .then(function(response) {
            return response.data.filter(function(item) {
                if(item.id == id) return item;
            })
        });
    };
});