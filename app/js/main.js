angular.module("TTT",["ng-route"])

game = (function(){
  'use strict'

  var levels = ["emu", "van", "dinosaur"];

  function randomizer() {
    return Math.floor(Math.random * levels.length);
  }

  function arrowInterval() {
    setInterval(arrowFlash, 600);
  }

  function arrowFlash() {
    $(".arrow").toggle;
  }

  function clearArrowInterval(function) {
    clearInterval(function);
  }

  return;
})();
