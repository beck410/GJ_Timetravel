;(function(){
  'use strict';
  angular.module('TTT')
  .controller('dinosaurController',function($location,$scope,dinoAnimate){
    var vm = this;
    vm.option = true;

    $('.textbox').text('You arrive inat the next era, looking out of the window you see dinosaurs roaming about what do you do?');


    vm.doorChoice = function(){
      dinoAnimate.die();
    };

    vm.leverChoice = function(){
      dinoAnimate.nextLevel(function(lever){
        $location.path('/' + game.randomizer());
        $scope.$apply();
      });
    };
  });
})();
