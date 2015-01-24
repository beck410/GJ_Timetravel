;(function(){
  'use strict';
  angular.module('ttt')
  .config(function($routeProvider){
    $routeProvider
    .when('/dino',{
      templateUrl: 'view/emu.html',
      controller: 'dinosaurController',
      controllerAs: 'dino'
    });
  });
})();

