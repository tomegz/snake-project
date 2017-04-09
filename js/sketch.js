var snake, food, range, color, fr, nextDir;
var directionQueue = [];
function setup() {
    var c = createCanvas(600, 600);
    var cHeight = c.height;
    var cWidth = c.width;
    range = document.querySelector("input");
    snake = new Snake(cHeight, cWidth);
    food = new Food();
    fr = cHeight/snake.height;
    frameRate(10); // hardcoded for now
}
function draw() {
    color = getColor();
    background(color);
    fill(255, 255, 255);
    snake.show();
    food.show();
    food.update();
    snake.update();
}
function keyPressed() {
    switch(keyCode) {
        case UP_ARROW:
            nextDir = snake.changeDirection(0, -1);
        break;
        case RIGHT_ARROW:
            nextDir = snake.changeDirection(1, 0);
        break;
        case DOWN_ARROW:
            nextDir = snake.changeDirection(0, 1);
        break;
        case LEFT_ARROW:
            nextDir = snake.changeDirection(-1, 0);
        break;
    }
}
function getColor() {
    return range.value*2;
}
