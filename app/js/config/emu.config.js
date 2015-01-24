;(function(){
  'use strict';
  angular.module('TTT')
  .config(function($routeProvider){
    $routeProvider
    .when('/emu',{
      templateUrl: 'views/emu.html',
      controller: 'emuController',
      controllerAs: 'emu'
    });
  });
})();

