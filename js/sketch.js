var snake, food, menu, playBtn, settingsBtn, difficultyBar, difficultyIndicator;
function setup() {
    var c = createCanvas(600, 600);
    var cHeight = c.height;
    var cWidth = c.width;
    menu = document.getElementById("menu");
    playBtn = document.getElementById("play-button");
    difficultyBar = document.getElementById("difficulty-bar");
    difficultyIndicator = document.getElementById("difficulty-indicator");
    showElement(menu);
    handleChange(difficultyBar);
    handleClick(playBtn);
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
function showElement(e) {
    e.style.visibility = "visible";
}
function hideElement(e) {
    e.style.visibility = "hidden";
}
function handleClick(button) {
    button.addEventListener("click", resetSketch);
}
function handleChange(range) {
    range.addEventListener("input", showDifficulty);
}
function getDifficulty() {
    return difficultyBar.value;
}
function showDifficulty() {
    var diff = getDifficulty();
    difficultyIndicator.innerText = "Difficulty: " + diff;
}
function resetSketch() {
    console.log("here");
    hideElement(menu);
    snake = new Snake(300, 300, getDifficulty());
    food = new Food();
    frameRate(10); 
    //textSize(50);
    loop();
}