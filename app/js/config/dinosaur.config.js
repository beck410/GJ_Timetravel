;(function(){
  'use strict';
  angular.module('TTT')
  .config(function($routeProvider){
    $routeProvider
    .when('/dino',{
      templateUrl: 'views/dino.html',
      controller: 'dinosaurController',
      controllerAs: 'dino'
    })
    .when('/', {
      template: '',
      controller: 'mainController',
      controllerAs: 'main'
    })
    .when('/van', {
      templateUrl: 'views/default.html',
      controller: 'vanController',
      controllerAs: 'van'
    });
  });
})();
