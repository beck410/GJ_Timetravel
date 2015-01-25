(function() {
  "use strict";

  angular.module('TTT')
  .controller('endController', function(){
    $('.textbox').text('Having restored the timeline the time machine takes you back to your start. You step out of your bus and into your office, the machine disappearing behind you. Everything looks normal again, you guess. You find another note on your desk.');

    $('.one').show();


  $('.one').on('click', function() {
    $(this).hide();
    $('.textbox').text('“Dear Marta, Thank you for all your help! I hope you weren’t too put out by the trouble caused. I left some cake for you in the fridge. -Toodles!”');

    $('.two').show();
  })

  $('.two').on('click', function(){
    $(this).hide();
    $('.textbox').text('You open the fridge to find some delicious chocolate cake. At least it wasn\’t a lie. You brew yourself some coffee to go with it and sit down to begin your work.');

    $('.three').show();
  })

  $('.three').on('click', function(){
    $(this).hide();
    $('.textbox').text('You: I hate Mondays...');
  })

})

}());
