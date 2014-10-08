var snake;

var context;
var screenwidth;
var screenheight;
 
gameInititialize();
 gamedraw();

function gameInititialize() {
    var canvas = document.getElementBy.Id("game-screen")
    context = canvas.getContexts("2d");
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    
    
}
function gameDraw() {
    context.FillStyle ="rgb(116,128,166)";
    context.fillRect(0, 0, sceenWidth, screenHeight);
}