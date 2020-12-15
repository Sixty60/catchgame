# Programmeringsprojekt: Catch the ball
Jag har valt att göra ett simpelt “catch the ball” spel. I spelet kontrollerar du en “platta” med piltangenterna. Plattan kan bara röra sig längs x-axeln. 
Med plattan så fångar du “bollar” som faller från himmeln. Om du fångar bollen får du ett poäng. Om du missar bollen förlorar du. 
Efter en viss mängd poäng så faller bollen snabbare. 

 
Vad jag behöver göra för att det ska fungera: 

<b>Key detection & control<b> 
 Key detection var nog den svåraste delen av detta projektet. Jag hade aldrig gjort det tidigare i Khan academy, så jag började med att checka andra projekt.
 Jag skrev samma kod som de gjorde, men fick det inte att fungera. Detta tog några timmar att lista ut men felet jag gjorde var rätt simpelt.
 
 Hur jag gjorde det:
 
 Jag började med att skapa en variabel för "player"
 player.x
 
 
 if(keyIsPressed && keyCode === 37){
 player.x -= 3;
 } else if(keyIsPressed && keyCode 39){
 player.x += 3;
 }
 

<b>Collision<b> 

<b>Score system<b>

<b>Ball physics<b>

<b>Difficulty system<b>
 
<b>Drawing routine<b>
