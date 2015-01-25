angular.module("TTT")
.controller("vanController", function($location, $scope) {
var vm = this;
vm.option1 = false;
vm.option2 = false;

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
    $(".textbox").text("Van Gogh: Always a pleasure to meet an admirer. That Gaugin wouldn’t know quality if it hit him in the face. We got in an argument the other night, but a strangely garbed person (much like yourself) worked out a truce between us and now we are reconciled.");
    $(".two").hide();
    $(".three").show();
  })

  $(".three").on("click", function(){
    $('.three').hide();
    $('.textbox').text( "Van Gogh: I was supposed to meet him at the bar, care to accompany me?")
    joinMoment();
  })

  $(".right-1").on("click", function(){
    $('.textbox').text( "You: Gaugin? I’m actually a huge fan of your artwork. You mind if I get your autograph?");
    vm.option1 = false;
    $('.four').show();
    $scope.$apply();
  })
  $('.four').on("click", function(){
    $('.textbox').text('Gaugin: I don’t do autographs. That’s more of that pompous fool Van Gogh purview.');
    $(this).hide();
    $('.five').show();
  })
  $('.five').on("click", function(){
    $(this).hide();
    $('.textbox').text('You: Pompous fool, what do you mean?');
    $('.six').show();
  });
  $('.six').on('click', function() {
    $(this).hide();
    $('.textbox').text('Gaugin: He is too self absorbed with his work and women to pay attention to his friends, we almost came to blows over it the other night, but a strangely garbed person (much like yourself) helped us overcome our differences.');
    $('.seven').show();
  })

  $('.seven').on('click', function(){
    $(this).hide();
    $('.textbox').text( 'I was supposed to meet him at the bar(?), care to accompany me?')
    joinMoment();
  })

  function joinMoment(){
    $('.eight').show();
  }

  $('.eight').on('click',function(){
    $(this).hide();
    $('.textbox').text('Van Gogh: Gaugin...');
    $('.nine').show();
  })

  $('.nine').on('click', function(){
    $(this).hide();
    $('.textbox').text('Gaugin: Van Gogh...');
    $('.ten').show();
  })

  $('.ten').on('click', function(){
    $(this).hide();
    $('.textbox').text('...');
    $('.eleven').show();
  })

  $('.eleven').on('click', function(){
    $(this).hide();
    $('.textbox').text('*awkward tension intensifies*');
    vm.option2 = true;
    $scope.$apply();
  })

});
