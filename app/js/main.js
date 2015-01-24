angular.module("TTT",["ng-route"])

game = (function(){
  'use strict'

  var levels = ["emu", "van"];

  function randomizer() {
    return Math.floor(Math.random * levels.length);
  }

  return;
})();
