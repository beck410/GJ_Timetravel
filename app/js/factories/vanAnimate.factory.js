;(function(){
  'use strict';
  angular.module('TTT')
  .factory('vanAnimate',function(){
    var bgImg = $('.body');
  
  function leftOne(cb){
    bgImg.css('background','url("../images/Outside.png")');
    cb();
  }

  function rightOne(cb){
    bgImg.css('background','url("../images/Outside.png")');
    cb();
  }

  function Eight(cb){
    bgImg.css('background','url("../images/Inside.png")');
    cb();
  }

  return {
     leftOne: leftOne,
     rightOne: rightOne,
     Eight: Eight
  };

  });
})();
