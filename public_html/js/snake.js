var snake;
var snakeLength;
var snakeSize;

var food;

var context;
var screenWidth;
var screenHeight;
 
gameInititialize();
snakeInititialize();
setInterval(gameLoop, 1000/30);


function gameInititialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    gameDraw ();
    snakeUpdate();
    snakeDraw();
    
}
function gameDraw() {
    context.fillStyle ="rgb(116, 128, 166)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}
function snakeInititialize() {
    snake = [];
    snakeLength = 15;
    snakeSize = 20;
    
    for(var index = snakeLength-1 ; index >=0; index--) {
        snake.push ( {
            x:index,
            y:0
        });
    }
}

function snakeDraw() {
    for (var index = 0;index < snake.length; index++) {
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}
function snakeUpdate() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;
    
    snakeHeadX++;
    
    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}
function foodInititialize(){
    food = {
        x:0,
        y:0
    };
}
function foodDraw (){
    context.fillStyle = "white";
}  context.fillRect(food.x, food.y, snakesize, snakesize);
