var snake, range, color, fr;
function setup() {
    var c = createCanvas(600, 600);
    var cHeight = c.height;
    var cWidth = c.width;
    range = document.querySelector("input");
    snake = new Snake(cHeight, cWidth);
    fr = cHeight/snake.height;
    frameRate(10); // hardcoded for now
}
function draw() {
    color = getColor();
    background(color);
    stroke(200);
    snake.show();
    snake.update();
}
function keyPressed() {
    switch(keyCode) {
        case UP_ARROW:
            snake.changeDirection(0, -1);
        break;
        case RIGHT_ARROW:
            snake.changeDirection(1, 0);
        break;
        case DOWN_ARROW:
            snake.changeDirection(0, 1);
        break;
        case LEFT_ARROW:
            snake.changeDirection(-1, 0);
        break;
    }
}
function getColor() {
    return range.value*2;
}
