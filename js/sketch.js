var snake, food;
var btn = document.createElement('button');
btn.style.color = "black";
function setup() {
    var c = createCanvas(600, 600);
    var cHeight = c.height;
    var cWidth = c.width;
    var btn = createButton();
    showButton(btn, "Play");
    handleClick(btn);
    noLoop();  
}
function draw() {
    background(60);
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
function createButton() {
    return document.createElement("button");
}
function showButton(button, label){
    button.innerHTML = label;
    document.body.appendChild(button);
}
function handleClick(button) {
    button.addEventListener("click", resetSketch);
}
function resetSketch() {
    snake = new Snake(300, 300);
    food = new Food();
    frameRate(10); 
    //textSize(50);
    loop();
}