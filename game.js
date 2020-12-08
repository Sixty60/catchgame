//falling object parameters
var fallingObjects = 0;
var pointX = random(50, 300);
var pointY = 50;

//player location
var playerX = 175;
var playerY = 350;


var draw = function() {
    background(0,0,0);
    if (keyIsPressed && keyCode === 37) {
        playerX -= 3;
    } else if(keyIsPressed && keyCode === 39) {
        playerX += 3;
    }
     if (fallingObjects === 0){
        ellipse(pointX, pointY, 10, 10);
        fallingObjects = 1;
    }else if (fallingObjects === 1) {
        pointY++;
        noStroke();
        ellipse(pointX, pointY, 10, 10);
    }
    if (playerX === pointX && playerY === pointY){
        playSound(getSound("retro/coin"));
    }
   rect(playerX, playerY, 5, 5);
};

