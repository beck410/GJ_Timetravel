;(function() {
  "use strict";

  angular.module("TTT", [ "ngRoute" ])
  .controller("mainController", function($location) {
    $location.path("/" + game.randomizer());

  });

}());

var game = (function() {
  "use strict";
  var levels = ["emu", "van", "dinosaur"];

  function randomizer() {
    var selection = levels.splice(Math.floor(Math.random() * levels.length), 1);
    return selection
  }

  function arrowInterval() {
    setInterval(arrowFlash, 600);
  }

  function arrowFlash() {
    $(".arrow").toggle();
  }

  function clearArrowInterval(func) {
    clearInterval(func);
  }

  return {
    randomizer: randomizer,
    arrowInterval: arrowInterval,
    clearArrowInterval: clearArrowInterval
  };
}());
