angular.module("TTT")
.controller("emuController", function($location, $scope) {
  var vm = this;


  $(".textbox").text("Emus have overrun Australia destroying all crops. You are sent to 1932 where Major Merideth has second thoughts about facing the fierce emu mob once more.");
  $(".bodyemu").css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/d/dc/Emus,_Wilsons_Promontory_National_Park.jpg)")
  $(".bodyemu").css("background-size", "600px 600px");

// PUB SCENE //
vm.option1pub = false;
vm.option2pub = false;

  $(".one").show();
  $(".one").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: I don't even deserve to be called a Major!");
    $(".two").show();
    game.changeBackground(".bodyemu", "../images/MeredithatPub.png");


    $scope.$apply();
  })
  $(".two").on("click", function (){
    $(this).hide();
    $(".textbox").text("Marta: Do you mean because of the emus?");
    $(".three").show();
    $scope.$apply();
  })
  $(".three").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: Yes, the emus! Lost to a bunch of bloody birds.");
    $(".four").show();
    $scope.$apply();
  })
  $(".four").on("click", function (){
    $(this).hide();
    $(".textbox").text("Marta: Was it really all that bad, shouldn’t you give it another go?");
    $(".five").show();
    $scope.$apply();
  })
  $(".five").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: If we had a military division with the bullet-carrying capacity of these birds it would face any army in the world...They can face machine guns with the invulnerability of tanks. They are like Zulus whom even dum-dum bullets could not stop.");
    $(".six").show();
    $scope.$apply();
  })
  $(".six").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: I won’t face those birds again!");
    vm.option1pub = true;
    vm.option2pub = true;
    $scope.$apply();
  })


  $(".left-pub").on("click", function (){
    $(".textbox").text("*You run out of the pub after Major Merideth, unfortunately there was a herd of sheep running through town at that moment. Caught in a fluffy doom, you were trampled to death by sheep.* GAME OVER!! Click the arrow to try again.");
    vm.option1pub = false;
    vm.option2pub = false;
    $(".six").show();
    game.changeBackground(".bodyemu", "../images/SheepTrample.png");
    $scope.$apply();
  })

  $(".right-pub").on("click", function (){
    $(".textbox").text("*You let him stumble off into the night, deciding to go to his base in the morning. You have a plan...*");
    vm.option1pub = false;
    vm.option2pub = false;
    $(".seven").show();
    game.changeBackground(".bodyemu", "../images/Base.png");
    $scope.$apply();
  })

// BASE SCENE //
vm.option1base = false;
vm.option2base = false;
  $(".seven").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: You! The meddlesome person from the pub! Why don’t you leave me alone?");
    $(".eight").show();
    $scope.$apply();
  })
  $(".eight").on("click", function (){
    $(this).hide();
    $(".textbox").text("Marta: There aren’t enough experienced machine gunners in Australia. You are needed to lead the campaign against the emus and protect the farmlands from destruction!");
    $(".nine").show();
    $scope.$apply();
  })
  $(".nine").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: I wasn’t successful before, and I thought I saw a strange interloper assisting the emus last time I was out there.");
    $(".ten").show();
    $scope.$apply();
  })
  $(".ten").on("click", function (){
    $(this).hide();
    $(".textbox").text("Time to unveil your plan. Do you entice him with food or tell your fake story of woe?");
    vm.option1base = true;
    vm.option2base = true;
    $scope.$apply();
  })


  $(".left-base").on("click", function (){
    $(".textbox").text("Marta: You must be hungry this early in the morning, have this delicious dish.");
    vm.option1base = false;
    vm.option2base = false;
    $(".thirteen").show();
    game.changeBackground(".bodyemu", "../images/MeredithFood.png");
    $scope.$apply();
  })

  $(".right-base").on("click", function (){
    $(".textbox").text("Marta: The Emus -- They ate our crops, trampled the other animals, broke down my home, and killed my family. It happened to me, it will happen to others. It’s up to you to once more raise arms against this menace and face your feathered foes! Their numbers are strong, but only you can guide us!");
    vm.option1base = false;
    vm.option2base = false;
    $(".eleven").show();
    $scope.$apply();
  })

// The Woe Choice //
  $(".eleven").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: The menace is even greater than I thought! We haven’t a chance!");
    $(".twelve").show();
    $scope.$apply();
  })
  $(".twelve").on("click", function (){
    $(this).hide();
    $(".textbox").text("*Unfortunately, Major Merideth’s phobia was exacerbated by your rousing speech. In his panic to escape he hopped in a vehicle and accidently backed over and trampled you. GAME OVER!! Click the arrow to try again.*");
    $(".ten").show();
    game.changeBackground(".bodyemu", "../images/JeepTrample.png");
    $scope.$apply();
  })


  // The Food Choice //
  $(".thirteen").on("click", function (){
    $(this).hide();
    $(".textbox").text("*You hand him a dish with some large drumsticks protruding from it*");
    $(".fourteen").show();
    $scope.$apply();
  })
  $(".fourteen").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: Wow, this is delicious. But why give this to me?");
    $(".fifteen").show();
    $scope.$apply();
  })
  $(".fifteen").on("click", function (){
    $(this).hide();
    $(".textbox").text("Marta: Do you really like it? I was up most of the night preparing it for you.");
    $(".sixteen").show();
    $scope.$apply();
  })
  $(".fifteen").on("click", function (){
    $(this).hide();
    $(".textbox").text("Marta: It’s -- It's... ");
    $(".sixteen").show();
    $scope.$apply();
  })
  $(".sixteen").on("click", function (){
    $(this).hide();
    $(".textbox").text("Marta: It’s EMU! Think of the vast supply of this just waiting for us out there, just ripe for the plucking!");
    $(".seventeen").show();
    $scope.$apply();
  })
  $(".seventeen").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: But the dangers...");
    $(".eighteen").show();
    $scope.$apply();
  })
  $(".eighteen").on("click", function (){
    $(this).hide();
    $(".textbox").text("Marta: Isn’t it worth this delicious dish?");
    $(".nineteen").show();
    $scope.$apply();
  })
  $(".nineteen").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: Let me round up the troops!");
    $(".twenty").show();
    $scope.$apply();
  })

//EMU WAR SCENE //
vm.option1war = false;
vm.option2war = false;
  $(".twenty").on("click", function (){
    $(this).hide();
    $(".textbox").text("*After gathering his platoon, you and his men head out into the field.  After several days of travelling you find where the mob of emus are.*");
    $(".twentyone").show();
    game.changeBackground(".bodyemu", "../images/MeredithEmuField.png");
    $scope.$apply();
  })
  $(".twentyone").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: All right men, I know you’re hungry after that search. I hunger too, hunger for vengeance and hunger for delicious emu meat!");
    $(".twentytwo").show();
    $scope.$apply();
  })
  $(".twentytwo").on("click", function (){
    $(this).hide();
    $(".textbox").text("Soldier: Sir! The emu mob is headed this way!");
    $(".twentythree").show();
    $scope.$apply();
  })
  $(".twentythree").on("click", function (){
    $(this).hide();
    $(".textbox").text("*Major Merideth falters and looks towards you, looking as if he wants input...*");
    vm.option1war = true;
    vm.option2war = true;
    $scope.$apply();
  })

  $(".left-war").on("click", function (){
    $(".textbox").text("Marta: We should use the element of surprise to our advantage, press the charge!");
    vm.option1war = false;
    vm.option2war = false;
    $(".thirtyone").show();
    $scope.$apply();
  })

  $(".right-war").on("click", function (){
    $(".textbox").text("We should hide in the brush, surround the emus, and open fire all at once.");
    vm.option1war = false;
    vm.option2war = false;
    $(".twentyfour").show();
    $scope.$apply();
  })

  //Surprise//
  $(".thirtyone").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: Of course, the dumb buzzards will never see it coming!");
    $(".thirtytwo").show();
    $scope.$apply();
  })
  $(".thirtytwo").on("click", function (){
    $(this).hide();
    $(".textbox").text("*All the soldiers rush out, guns blazing. They manage to fell a few emus, but most panicked and ran wild. Amidst the fighting, you and the soldiers are trampled by emu! GAME OVER!! Click the arrow to try again.*");
    game.changeBackground(".bodyemu", "../images/EmuTrample.png");
    $(".twentythree").show();
    $scope.$apply();
  })


//Ambush//

vm.option1end = false;
vm.option2end = false;
  $(".twentyfour").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: Of course, the dumb buzzards will never see it coming!");
    $(".twentyfive").show();
    $scope.$apply();
  })
  $(".twentyfive").on("click", function (){
    $(this).hide();
    $(".textbox").text("*The volley was fierce with many emus falling. Wounded and beaten, the emus fled. The soldiers let out a hearty cry of victory.*");
    $(".twentysix").show();
    game.changeBackground(".bodyemu", "../images/DeadEmus.png");
    $scope.$apply();
  })
  $(".twentysix").on("click", function (){
    $(this).hide();
    $(".textbox").text("Soldier: Sir, we’ve piled all the emus together and we have over 900!");
    $(".twentyseven").show();
    $scope.$apply();
  })
  $(".twentyseven").on("click", function (){
    $(this).hide();
    $(".textbox").text("Marta: It’s over 9000!!!!!!!");
    $(".twentyeight").show();
    $scope.$apply();
  })
  $(".twentyeight").on("click", function (){
    $(this).hide();
    $(".textbox").text("Soldier: um...no...more like 1000 I would say.");
    $(".twentynine").show();
    $scope.$apply();
  })
  $(".twentynine").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: 986 to be precise. But, this is a heartening start! Let us press the attack while we have them on the run!");
    $(".thirty").show();
    $scope.$apply();
  })
  $(".thirty").on("click", function (){
    $(this).hide();
    $(".textbox").text("*Should the troops pursue the wounded emus, finishing this once and for all or should you hold a party in celebration?*");
    vm.option1end = true;
    vm.option2end = true;
    $scope.$apply();
  })


  $(".left-end").on("click", function (){
    $(".textbox").text("Marta: Now is our chance, strike while it’s hot!");
    vm.option1end = false;
    vm.option2end = false;
    $(".thirtyfour").show();
    $scope.$apply();
  })


  $(".right-end").on("click", function (){
    $(".textbox").text("Marta: These emus will never come back. Let's party like it's 1935!");
    vm.option1end = false;
    vm.option2end = false;
    $(".thirtyseven").show();
    $scope.$apply();
  })
  $(".thirtyseven").on("click", function (){
    $(this).hide();
    $(".textbox").text("*And so you do! Full of sardines and spam, you make your way back to the magic time bus. Where will you go next?*");
    game.changeBackground(".bodyemu", "../images/EmuParty.png");
    $(".thirtyeight").show();
    $scope.$apply();
  })
  $(".thirtyeight").on("click", function (){
    $location.path("/" + game.randomizer());
    $scope.$apply();
  })


  $(".thirtyfour").on("click", function (){
    $(this).hide();
    $(".textbox").text("Meredith: After those fleeing emus!");
    $(".thirtyfive").show();
    $scope.$apply();
  })
  $(".thirtyfive").on("click", function (){
    $(this).hide();
    $(".textbox").text("*In the heat of the chase, you fail to notice the troop of kangaroos behind you. Amidst such chaos, the birds flee and you are trampled by fierce kicks. GAME OVER!!! Click the arrow to try again.*");
    $(".thirty").show();
    game.changeBackground(".bodyemu", "../images/RooTrample.png");
    $scope.$apply();
  })



});
