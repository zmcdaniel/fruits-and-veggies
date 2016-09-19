/* setup your angular app here */

var app = angular.module('FruitVeggieApp', []);

app.run(function(){
    // debug stuff to show the app is loading and fruit / veggies are available
    console.log('App Started');
    console.log('Fruit count', fruits.length);
    console.log('Veggie count', vegetables.length);
});

app.controller("FruitVeggieCtrl", ["$scope", function($scope){
    $scope.allProduce = vegetables.concat(fruits);
    $scope.fruits = [];
    $scope.veggies = [];

    $scope.moveLeft = function(index){
        $scope.fruits.push($scope.allProduce[index]);
        $scope.allProduce.splice(index, 1);
    };

    $scope.moveRight = function(index){
        $scope.veggies.push($scope.allProduce[index]);
        $scope.allProduce.splice(index, 1);
    };

}]);