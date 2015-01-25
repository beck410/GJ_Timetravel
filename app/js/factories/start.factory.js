;(function(){
  'use strict';
  angular.module('TTT')
  .factory('startAnimate',function(){
    var bgImg = $('.home .body');
  
    function one(cb){
      bgImg.css('background','url("../images/Kitchen1.png")');
      cb();
    }

    return {
      one: one
    };
  });
})();
