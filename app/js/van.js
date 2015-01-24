angular.module("TTT")
.controller("vanController", function($location, $scope) {
var vm = this;
vm.option1 = false;

  $(".textbox").text("Seems like someone has messed up this time period. Someone helps Van Gogh makeup with his friend Gaugin. Because of this Modern Art is ruined!");

  $(".one").show();
  $(".one").on("click", function (){
    $(".one").hide();
    $(".textbox").text("You arrive in town and know that you must get Van’s ear. You know that at this time his friend Gaugin is in town, you also know Van Gogh frequents a particular bordello.  Do you want to see out Gaugin in case Van Gogh is with him, or visit the bordello?");
    vm.option1 = true;
    $scope.$apply();
  })
  $(".left-1").on("click", function (){
    $(".textbox").text("You: Van Gogh, I’m a huge fan of your work. You mind if I get your autograph?");
    $(".two").show();
    vm.option1 = false;
    $scope.$apply();
  })
  $(".two").on("click", function (){
    $(".textbox").text("Always a pleasure to meet an admirer. That Gaugin wouldn’t know quality if it hit him in the face. We got in an argument the other night, but a strangely garbed person (much like yourself) worked out a truce between us and now we are reconciled.");
    $(".two").hide();
  })

});
