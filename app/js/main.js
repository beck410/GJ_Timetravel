;(function() {
  "use strict";

  angular.module("TTT", [ "ngRoute" ])
  .controller("mainController", function($location, $scope) {

    $('.textbox').text("You, Marta McFry, wake up and walk to work. You haven’t had your coffee, so the surreality of the landscape doesn’t really sink in. On your desk is a note in messy handwriting.");

    $('.one').show();

    $('.one').on('click', function(){
      $(this).hide();
      $('.textbox').text('“Dear Marta, The current timeline has been distorted and it is up to you to fix things. A meddling interloper has tried his hand at making history a better place, but botched it big time... ');

      $('.two').show();
    });

      $('.two').on('click', function() {
        $(this).hide();
        $('.textbox').text('...I am currently occupied, but I left my timemachine at your disposal. You should just have to pull the lever and it will take you to the eras with strong temporal distortions. Fix things, if you please. -Toodles."');

      $('.three').show();
      });

      $('.three').on('click', function(){
        $(this).hide();

        $('.textbox').text('*sigh* You brew yourself a pot of coffee, and walk outside to find the time machine waiting for you.')

        $('.four').show();
      })

      $('.four').on('click', function(){
        randomize();
      })


    function randomize() {
      $location.path("/" + game.randomizer());
      $scope.$apply();
    }
  });

}());

var game = (function() {
  "use strict";
  var levels = ["emu", "van", "dino"];

  function randomizer() {
    if( levels.length === 0 ){
      return "end";
    }
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

  function changeBackground(element, imageURL){
    $(element).css("background-image", "url(" + imageURL + ")");
  }

  var music = new Audio("audio/Game Jam-Tip-Toe.mp3");
  music.loop = true;
  music.play();


  return {
    randomizer: randomizer,
    arrowInterval: arrowInterval,
    clearArrowInterval: clearArrowInterval,
    changeBackground: changeBackground
  };
}());
