;(function(){
  'use strict'; 
  angular.module('TTT')
  .controller('dinosaurController',function($location,$scope,dinoAnimate){
    var vm = this;

    vm.doorChoice = function(){ 
      dinoAnimate.die();
    }

    vm.leverChoice = function(){
      dinoAnimate.nextLevel(function(){
      $location.path('/' + game.randomizer());
      $scope.$apply();
      });
    }
  });
})();


