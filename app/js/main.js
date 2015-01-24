;(function() {
  "use strict";

  angular.module("TTT", ["ngRoute"] )


}()); //end of of iife

var game = (function() {
  "use strict";
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

  function clearArrowInterval(func) {
    clearInterval(func);
  }

  return {
    randomizer: randomizer,
    arrowInterval: arrowInterval,
    arrowFlash: arrowFlash,
    clearArrowInterval: clearArrowInterval
  };
}());
