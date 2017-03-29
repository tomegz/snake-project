function Food() {
    //private function to get new food position ON the grid instead of randomly
    var getNewPosition = function() {
        return createVector(round15(randomNumber()), round15(randomNumber()));
    }
    this.size = createVector(15, 15);
    this.position = getNewPosition();
    this.appear = function() {
        fill('red');
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}
//non related to Food helper functions
function round15(x) {
   return Math.ceil(x/15) * 15;
}
function randomNumber() {
    return Math.random()*600;
}