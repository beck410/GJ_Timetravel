;(function(){
  'use strict';
  angular.module('TTT')
  .config(function($routeProvider){
    $routeProvider
    .when('/dino',{
      templateUrl: 'views/dino.html',
      controller: 'dinosaurController',
      controllerAs: 'dino'
    });
  });
})();

