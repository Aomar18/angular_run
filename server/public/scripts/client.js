let FoodApp = angular.module( 'FoodApp' , [] );

FoodApp.controller('FoodController' , function(){
    let vm=this;

    vm.favoriteFood = [];
    
    vm.addFood = function(){
        console.log('addfood working')
        vm.favoriteFood.push(vm.foodIn);
    }
});