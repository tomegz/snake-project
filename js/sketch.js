var range, color;
function setup() {
    createCanvas(600, 600);
    range = document.querySelector("input");
}
function draw() {
    color = range.value*2;
    background(color);
}