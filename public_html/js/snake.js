var snake;
var snakeLength;
var snakeSize;
var snakeDirection;

var food;

var context;
var screenWidth;
var screenHeight;

gameInititialize();
snakeInititialize();
foodInitialize();
setInterval(gameLoop, 1000 / 30);



function gameInititialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;

    document.addEventListener("keydown", keyboardHandler);
}

function gameLoop() {
    gameDraw();
    snakeUpdate();
    snakeDraw();
    foodDraw();
}
function gameDraw() {
    context.fillStyle = "rgb(116, 128, 166)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}
function snakeInititialize() {
    snake = [];
    snakeLength = 1;
    snakeSize = 20;
    snakeDirection = "down";

    for (var index = snakeLength - 1; index >= 0; index--) {
        snake.push({
            x: index,
            y: 0
        });
    }
}

function snakeDraw() {
    for (var index = 0; index < snake.length; index++) {
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}
function snakeUpdate() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;

    if (snakeDirection == "down") {
        snakeHeadY++;
    }
    else if (snakeDirection== "right" ){
        snakeHeadX++;
    }
    else if (snakeDirection == "left"){
        snakeHeadX--;
    }
    else if (snakeDirection == "up"){
        snakeHeadY--;
    }
    
    checkFoodCollisions (snakeHeadX, snakeHeadY);
    checkWallCollision  (snakeHeadX, snakeHeadY);
    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}
function foodInitialize() {
    food = {
        x: 0,
        y: 0
    };
    setFoodPosition();
}
function foodDraw() {
    context.fillStyle = "white";
    context.fillRect(food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);
}
function setFoodPosition() {
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);

    food.x = Math.floor(randomX / snakeSize);
    food.y = Math.floor(randomY / snakeSize);
}
/*--------------------------------------------------
 * input function 
 * -------------------------------------------------
 */

function keyboardHandler(event) {
    console.log(event);

    if (event.keyCode == "39" && snakeDirection != "left"){
        snakeDirection = "right"; 
    }
    else if (event.keyCode == "40" && snakeDirection != "up"){
         snakeDirection = "down";
    }
    else if (event.keyCode == "38" && snakeDirection != "down"){
         snakeDirection = "up";
    }
    else if (event.keyCode == "37" && snakeDirection != "right"){
         snakeDirection = "left";
    }

}

/*----------------------------------------------
 *  collision handling 
 * ---------------------------------------
 */

function checkwallcollision(snakeHeadX, snakeHeadY){
    if (snakeHeadX * snakesize>= screenWidth || snakeHead < 0){
        console.log("Wall Collision")
    }
}



function checkFoodCollisions(snakeHeadX, snakeHeadY) {
    if(snakeHeadX == food.x && snakeHeadY == food.y){
     
        snake.push({
         x: 0,
         y: 0
     });
     snakeLength++;
     
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);

    food.x = Math.floor(randomX / snakeSize);
    food.y = Math.floor(randomY / snakeSize);
   }
} 