var snake;

var context;
var screenWidth;
var screenHeight;
 
gameInititialize();
gameDraw();

function gameInititialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    
    
}
function gameDraw() {
    context.fillStyle ="rgb(116, 128, 166)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}