angular.module("TTT")
.controller("vanController", function($location, $scope,vanAnimate) {
var vm = this;
vm.option1 = false;
vm.option2 = false;
vm.option3 = false;
vm.gogh = false;
vm.nameToUse = ["Gaugin", "Van Gogh"];

  //INTRO//
  $(".textbox").text("Seems like someone has messed up this time period.Van Gogh has made up with his friend Gaugin and never lost his ear. Because of this realism is all the art we know!");

  $(".one").show();
  $(".one").on("click", function() {
    $(".one").hide();
    $(".textbox").text("You arrive in town and know that you must get Van’s ear. You know that at this time his friend Gaugin is in town, you also know Van Gogh frequents a particular bordello.  Do you want to see out Gaugin in case Van Gogh is with him, or visit the bordello?");
    vm.option1 = true;
    $scope.$apply();
  });

// FIRST CHOICE//

//Van GOGH//
  $(".left-1").on("click", function (){
    vanAnimate.leftOne(function(){
      $(".textbox").text("You: Van Gogh, I’m a huge fan of your work. You mind if I get your autograph?");
      $(".two").show();
      vm.option1 = false;
      $scope.$apply();

      $(".two").on("click", function (){
        $(".textbox").text("Van Gogh: Always a pleasure to meet an admirer. That Gaugin wouldn’t know quality if it hit him in the face. We got in an argument the other night, but a strangely garbed person (much like yourself) worked out a truce between us and now we are reconciled.");
        $(".two").hide();
        $(".three").show();
      });
    });
  });

    $(".textbox").text("Marta: Van Gogh, I’m a huge fan of your work. You mind if I get your autograph?");
    $(".two").show();
    vm.option1 = false;
    vm.gogh = true;
    $scope.$apply();
  })
  $(".two").on("click", function (){
    $(".textbox").text("Van Gogh: Always a pleasure to meet an admirer. That Gaugin wouldn’t know quality if it hit him in the face. We got in an argument the other night, but a strangely garbed person (much like yourself) worked out a truce between us and now we are reconciled.");
    $(".two").hide();
    $(".three").show();
  })

  $(".three").on("click", function(){
    $('.three').hide();
    $('.textbox').text( "Van Gogh: I was supposed to meet him at the bar, care to accompany me?");
    joinMoment();
  });

  //GAUGIN//

  $(".right-1").on("click", function(){
    vanAnimate.rightOne(function(){
      $('.textbox').text( "You: Gaugin? I’m actually a huge fan of your artwork. You mind if I get your autograph?");
        vm.option1 = false;
        $('.four').show();
      $scope.$apply();
    });
    $('.textbox').text( "Marta: Gaugin? I’m actually a huge fan of your artwork. You mind if I get your autograph?");
    vm.option1 = false;
    $('.four').show();
    $scope.$apply();
  })

  $('.four').on("click", function(){
    $('.textbox').text('Gaugin: I don’t do autographs. That’s more of that pompous fool Van Gogh purview.');
    $(this).hide();
    $('.five').show();
  });
  $('.five').on("click", function(){
    $(this).hide();
    $('.textbox').text('Marta: Pompous fool, what do you mean?');
    $('.six').show();
  });
  $('.six').on('click', function() {
    $(this).hide();
    $('.textbox').text('Gaugin: He is too self absorbed with his work and women to pay attention to his friends, we almost came to blows over it the other night, but a strangely garbed person (much like yourself) helped us overcome our differences.');
    $('.seven').show();
  });

  $('.seven').on('click', function(){
    $(this).hide();
    $('.textbox').text( 'I was supposed to meet him at the bar(?), care to accompany me?');
    $('.textbox').text( 'Gaugin: I was supposed to meet him at the bar, care to accompany me?')
    joinMoment();
  });

  //BAR SCENE//

  function joinMoment(){
    $('.eight').show();
  }

  $('.eight').on('click',function(){
    $(this).hide();
    vanAnimate.Eight(function(){
      $('.textbox').text('Van Gogh: Gaugin...');
      $('.nine').show();
      $scope.$apply();
    });
  });

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

//SECOND CHOICE//
//Choose to Drink//
  $('.eleven').on('click', function(){
    $(this).hide();
    $('.textbox').text('*awkward tension intensifies*');
    vm.option2 = true;
    $scope.$apply();
  })

  $('.right-2').on('click', function(){
    $('.textbox').text('A few drinks loosened everyone up and helped smooth out any remaining tensions between the friends. After a few too many drinks all three of you decided to visit the bordello, unfortunately the drinks made it hard to notice the oncoming traffic. Van Gogh and Gaugin were fine, but you were trampled by a horsecart.');
    $('.thirteen').show();
    vm.option2 = false;
    $scope.$apply();
  })

  $('.thirteen').on('click', function(){
    $(this).hide();
    $('.textbox').text('Game Over. Looping you back to the previous decision.');
    $('.eleven').show();
  })

  //SECOND CHOICE//
  //Tell him his art sucks!//

  $('.left-2').on('click', function(){
    if(vm.gogh == true){
      vm.nameToUse = ["Van Gogh", "Gaugin"];
      $scope.$apply();
    }
    $('.textbox').text(vm.nameToUse[0] + ': What I said no such thing, however true it might be!');
    $('.fourteen').show();
    vm.option2 = false;
    $scope.$apply();
  })

  $('.fourteen').on('click', function(){
    $(this).hide();
    $('.textbox').text(vm.nameToUse[0] + ': I may have thought it, but am too refined to say so.');
    $('.fifteen').show();
  })

  $('.fifteen').on('click', function(){
    $(this).hide();
    $('.textbox').text(vm.nameToUse[1] + ': How dare you, first you stole my woman then you besmirch my work!');
    $('.sixteen').show();
  })

  $('.sixteen').on('click', function(){
    $(this).hide();
    $('.textbox').text(vm.nameToUse[0] + ': This was a mistake, we never should have listened to that Interloper!');
    $('.seventeen').show();
  })

  $('.seventeen').on('click', function(){
    $(this).hide();
    $('.textbox').text('Both: We duel at dawn!');
    $('.eighteen').show();
  })

  $('.eighteen').on('click', function(){
    $(this).hide();
    $('.textbox').text('You go back to Van Gogh\'s Pad');
    $('.nineteen').show();
  })

  $('.nineteen').on('click', function(){
    $(this).hide();
    $('.textbox').text('Marta: A duel, isn’t Gaugin a fencer as well as painter? Are you sure this is a good idea?');
    $('.twenty').show();
  })

  $('.twenty').on('click', function(){
    $(this).hide();
    $('.textbox').text('Van Gogh: You heard the man, he is unforgivable');
    $('.twentyone').show();
  })

  //THIRD CHOICE//

  $('.twentyone').on('click', function(){
    $(this).hide();
    $('.textbox').text('Marta: Well, at least prepare before meeting him...');
    vm.option3 = true;
    $scope.$apply();
  })

  //THIRD CHOICE//
  //Apology//

  $('.middle-3').on('click', function(){
    $('.textbox').text('Marta: All you need is a well crafted apology and I’m sure you two can be friends again.');
    $('.thirtytwo').show();
    vm.option3 = false;
    $scope.$apply();
  })

  $('.right-3').on('click', function(){
    $('.textbox').text('Marta: He is a better fencer than you, take this pistol with you to ensure victory.');
    $('.twentyeight').show();
    vm.option3 = false;
    $scope.$apply();
  })

  $('.thirtytwo').on('click', function(){
    $(this).hide();
    vanAnimate.thirtyTwo(function(){
      $('.textbox').text('Gaugin: So you showed your scurvy face after all!');
      $('.thirtythree').show();
    });
  });

  $('.thirtythree').on('click', function(){
    $(this).hide();
    $('.textbox').text('Van Gogh: There’s no need for such harsh language, I forgive you for your trespasses and invite you to do the same.');
    $('.thirtyfour').show();
  })

  $('.thirtyfour').on('click', function(){
    $(this).hide();
    $('.textbox').text('Gaugin: I forgive you, lets head to the bar and I’ll buy a round for everyone!');
    $('.thirtyfive').show();
  })

  $('.thirtyfive').on('click', function(){
    $(this).hide();
    $('.textbox').text('*The crowd that had gathered around cheers in excitement and rushes to the bar (bordello?), unfortunately you get trampled by the crowd in the confusion.*')
    $('.thirtysix').show();
  })

  $('.thirtysix').on('click', function(){
    $(this).hide();
    $('.textbox').text('Game Over. Looping you back to the previous decision.');
    $('.twentyone').show();
  })

  //THIRD CHOICE//
  //Pistol//
  $('.twentyeight').on('click', function(){
    $(this).hide();
    $('.textbox').text('Gaugin: So you showed your scurvy face after all!');
    $('.twentynine').show();
  })

  $('.twentynine').on('click', function(){
    $(this).hide();
    $('.textbox').text('Van Gogh: Yes, we will settle our differences in a tried and true fashion. With violence!');
    $('.thirty').show();
  })

  $('.thirty').on('click', function(){
    $(this).hide();
    $('.textbox').text('Van Gogh pulls out pistol and attempts to shoot Gaugin. Van Gogh is a terrible shot, misses Gaugin and spooks some horses, which trample you to death.');
    $('.thirtyone').show();
  })

  $('.thirtyone').on('click', function(){
    $(this).hide();
    $('.textbox').text('Game Over. Looping you back to the previous decision.');
    $('.twentyone').show();
  })

  //THIRD CHOICE//
  //Razor//

  $('.left-3').on('click', function(){
    $('.textbox').text('Marta: Take that razor with you, he’ll never see it coming');
    $('.twentytwo').show();
    vm.option3 = false;
    $scope.$apply();
  })

  $('.twentytwo').on('click', function(){
    $(this).hide();
    $('.textbox').text('Gaugin: So you showed your scurvy face after all!');
    $('.twentythree').show();
  })

  $('.twentythree').on('click', function(){
    $(this).hide();
    $('.textbox').text('Van Gogh: Yes, we will settle our differences in a tried and true fashion. With violence!');
    $('.twentyfour').show();
  })

  $('.twentyfour').on('click', function(){
    $(this).hide();
    $('.textbox').text('*exciting sword fight in which Gaugin cuts off Gogh’s ear*');
    $('.twentyfive').show();
  })

  $('.twentyfive').on('click', function(){
    $(this).hide();
    $('.textbox').text('Van Gogh: Ouch...');
    $('.twentysix').show();
  })

  $('.twentysix').on('click', function(){
    $(this).hide();
    $('.textbox').text('Gaugin: Yeah, you should get that looked at.');
    $('.twentyseven').show();
  })

  $('.twentyseven').on('click', function(){
    $(this).hide();
    $('.textbox').text('Van Gogh: Naw I think I’ll send it to a girl I know, she’ll love it.');
    //This story arc is completed!!!
    $('.thirtyseven').show();
  })

  $('.thirtyseven').on('click', function(){
    $location.path("/" + game.randomizer());
    $scope.$apply();
  })

});
