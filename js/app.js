/* setup your angular app here */

var app = angular.module('FruitVeggieApp', []);

app.run(function(){
    // debug stuff to show the app is loading and fruit / veggies are available
    console.log('App Started');
    console.log('Fruit count', fruits.length);
    console.log('Veggie count', vegetables.length);
});

app.controller("FruitVeggieCtrl", ["$scope", function($scope){

    // Fisher-Yates shuffle algorithm
    $scope.shuffle = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    $scope.allProduce = $scope.shuffle(vegetables.concat(fruits));
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