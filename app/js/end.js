(function() {
  "use strict";

  angular.module('TTT')
  .controller('endController', function(){
    //Outside image
    $('.textbox').text('Having restored the timeline the time machine takes you back to your start. You step out of your bus and into your office, the machine disappearing behind you. Everything looks normal again, you guess. You find another note on your desk.');
    //transition to switch outside scene
    $('.one').show();


  $('.one').on('click', function() {
    $(this).hide();
    //switch to kitchen image
    $('.textbox').text('“Dear Marta, Thank you for all your help! I hope you weren’t too put out by the trouble caused. I left some cake for you in the fridge. -Toodles!”');

    $('.two').show();
  })

  $('.two').on('click', function(){
    $(this).hide();
    //fridge with cake image
    $('.textbox').text('You open the fridge to find some delicious chocolate cake. At least it wasn\’t a lie. You brew yourself some coffee to go with it and sit down to begin your work.');
    //transition to desk image
    $('.three').show();
  })

  $('.three').on('click', function(){
    $(this).hide();
    $('.textbox').text('Mart: I hate Mondays...');
  })

})

}());
