var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;
 
gameInititialize();
snakeInititialize();
gameDraw();
snakeDraw();

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
function snakeInititialize() {
    snake = [];
    snakeLength = 5;
    snakeSize = 20;
    
    for(var index = 0; index < snakeLength; index++) {
        snake.push ( {
            x:index,
            y:0
        });
    }
}

function snakeDraw() {
    for (var index = snakeLength - 1; index >= 0; index--){
        context.fillstyle = "white";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}
function snakeUpdate() {
    
}