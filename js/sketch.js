var snake, food, range, color, fr;
function setup() {
    var c = createCanvas(600, 600);
    var cHeight = c.height;
    var cWidth = c.width;
    range = document.querySelector("input");
    snake = new Snake(cHeight, cWidth);
    food = new Food();
    fr = cHeight/snake.height;
    frameRate(10); 
}
function draw() {
    color = getColor();
    background(color);
    fill(255, 255, 255);
    snake.show();
    snake.showScore();
    snake.checkIfAlive();
    food.show();
    food.update();
    snake.update();
}
function keyPressed() {
    switch(keyCode) {
        case UP_ARROW:
            snake.addDirection(0, -1);
        break;
        case RIGHT_ARROW:
            snake.addDirection(1, 0);
        break;
        case DOWN_ARROW:
            snake.addDirection(0, 1);
        break;
        case LEFT_ARROW:
            snake.addDirection(-1, 0);
        break;
    }
}
function getColor() {
    return range.value*2;
}
