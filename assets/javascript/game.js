// Player has to guess the number
// 4 crystals need to be displayed as buttons
// crystal values 1-12
// Players are shown a random number at the beginning of the game
// Players will click on button to gain points 
// points gained are shown after click and counter is updated
// player wins if they match random initial number 
// player loses if they go above the random number
// game restarts whenever player wins or loses
// new random number when game restarts
// game will keep track of wins and losses
// random number shown at the start of game between 19-120

//create variables
//random between 19-120 
    var randomNumber= Math.floor((Math.random * 120) + 1);

 //Crystals random values 1-12
   var blue = Math.floor((Math.random * 12) + 1);
   var green = Math.floor((Math.random * 12) + 1);
   var red = Math.floor((Math.random * 12) + 1);
   var yellow = Math.floor((Math.random * 12) + 1);

   var wins = 0;
   var losses = 0;
   var totScore= 0; 

   $(document).ready(function() {
        
    $("#ranNumber").text(randomNumber);
       

        $(".blue").click(function() {
        update(blue);
        });
      
        $(".green").click(function() {
        update(green);
        });
      
        $(".red").click(function() {
        update(red);
        });
      
        $(".yellow").click(function() {
        update(yellow);
        });
      });
      
      
      
      function reset() {
        randomNumber = Math.floor((Math.random() * 120) + 19);
        $(".ranNumber").html(randomNumber);
      
        blue = Math.floor((Math.random() * 12) + 1);
        green = Math.floor((Math.random() * 12) + 1);
        red = Math.floor((Math.random() * 12) + 1);
        yellow = Math.floor((Math.random() * 12) + 1);
      
        totScore = 0;
      
        $(".current").html(totScore);
      }
      
      
      function update(color) {
        totScore += color;
      
        $(".current").empty();
        $(".current").append(totScore);
      
        if (totScore > ranNumber) {
          losses++;
          $(".losses").html(losses);
      
          reset();
      
        } else if (totScore == ranNumber) {
            wins++;
            $(".wins").html(wins);
            reset();
        };
      };

