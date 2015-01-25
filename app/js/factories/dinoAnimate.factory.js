;(function(){
  'use strict';
  angular.module('TTT')
  .factory('dinoAnimate',function(){

    var marta = $('#marta-img');
    var bgImg = $('.body-dino');
    var choices = $('.buttonwrap');
    var textbox = $('.textbox');
    var lever = $('#lever-img');
    var door = $('#door-img');
    var dino = $('#dino-img');
    var leverBase = $('#lever-base-img');

    function nextLevel(cb){
      marta.addClass('flipped').css('left','-500px');
      for(var i=0;i<9;i++){
        marta.animate({'left': '+=50px'},'slow');
      }
      marta.animate({'left': '+=10px'},'slow',function(){
        cb();
      });
    }

    function die(){
      for(var i=0;i<4;i++){
        marta.animate({'left': '-=50px'},'slow'); 
      }
      marta.animate({'left': '-=20px'},'slow',function(){
        _dinasaurDeath();
      })
    }

    function _dinasaurDeath(){ 
      marta.add(lever).add(door).add(leverBase).fadeOut('slow');
      bgImg.fadeOut('slow',function(){
        marta.css('height','200px').css('left','-700px').addClass('flipped');
        bgImg.css('background','url("../images/DynoBackground.png")').add(marta).fadeIn('slow',function(){
          dino.show('fast', function(){
            console.log("called")
            dino.animate({'right': '+=60px'},'fast')
            marta.css('background','url("../images/MartaScared.png") no-repeat');
          });
        });
      });
    }


  return {
    nextLevel: nextLevel,
    die: die
  }

  })
})();
