;(function(){
  'use strict';
  angular.module('ttt')
  .config(function($routeProvider){
    $routeProvider
    .when('/emu',{
      templateUrl: 'view/emu.html',
      controller: 'emuController',
      controllerAs: 'emu'
    });
  });
})();

