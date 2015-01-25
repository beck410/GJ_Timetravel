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

  function thirty(cb){
    console.log("called");
    gauguin.add(van).add(marta).addClass('hide');
    bgImg.css('background','url(../images/HorseTrample.png)');
    cb();
  }

  function thirtyTwo(cb){
    bgImg.css('background','url("../images/Outside.png")');
    cb(); 
  }

  function eighteen(cb){ 
    gauguin.add(van).add(marta).addClass('hide');
    bgImg.css('background','url("../images/VGhouse.png")');
    cb();
  }

  function right3(cb){
    bgImg.css('background','url("../images/VGhouseGun.png")');
    cb(); 
  }

  function left3(cb){
    bgImg.css('background','url("../images/VGhouseknife.png")');
    cb(); 
  }

  function twentytwo(cb){
    bgImg.css('background','url("../images/Swords.png")');
    cb();
  }

  function twentyfive(cb){
    bgImg.css('background','url("../images/Swordfight.png")')
    cb();

  }

  function thirtyfive(cb){
    console.log("bordello")
    bgImg.css('background','url("../images/brothelTrample.png")')
    cb();
  }



  return {
     leftOne: leftOne,
     rightOne: rightOne,
     Eight: Eight,
     thirtyTwo: thirtyTwo,
     thirty: thirty,
     eighteen: eighteen,
     right3: right3,
     left3: left3,
     twentytwo: twentytwo,
     twentyfive: twentyfive,
     thirtyfive: thirtyfive
  };

  });
})();
