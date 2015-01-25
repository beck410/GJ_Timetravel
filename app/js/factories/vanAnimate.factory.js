;(function(){
  'use strict';
  angular.module('TTT')
  .factory('vanAnimate',function(){
    var bgImg = $('.body');
    var marta = $('#van-marta');
    var gauguin = $('#gauguin');
    var van = $('#van');
  
  function leftOne(cb){
    marta.removeClass('hide');
    van.removeClass('hide');
    bgImg.css('background','url("../images/Outside.png")');
    cb();
  }

  function rightOne(cb){
    gauguin.removeClass('hide');
    marta.removeClass('hide');
    bgImg.css('background','url("../images/Outside.png")');
    cb();
  }

  function Eight(cb){ 
    gauguin.removeClass('hide');
    van.removeClass('hide');
    van.removeClass('flipped').css('left','400px');
    bgImg.css('background','url("../images/Inside.png")');
    cb();
  }

  function thirtyTwo(cb){
    bgImg.css('background','url("../images/Outside.png")');
    cb(); 
  }

  return {
     leftOne: leftOne,
     rightOne: rightOne,
     Eight: Eight,
     thirtyTwo: thirtyTwo
  };

  });
})();
