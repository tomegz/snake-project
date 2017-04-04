function Food() {
    //private function to get new food position ON the grid instead of randomly
    var getNewPosition = function() {
        //need to fix bug that makes food appear a little outside of grid
        return createVector(round15(randomNumber()), round15(randomNumber()));
    }
    this.size = createVector(15, 15);
    this.position = getNewPosition();
    this.show = function() {
        fill('red');
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    this.checkIfEaten = function() {
        if(this.position.x - snake.body[0].x === 0 && this.position.y - snake.body[0].y === 0){
            return true;
        } else {
            return false;
        }
    }
    this.update = function() {
        if(this.checkIfEaten()){
            this.position = getNewPosition();
            snake.grow();
        }
    }
}
//helper functions non related to Food 
function round15(x) {
   return Math.ceil(x/15) * 15;
}
function randomNumber() {
    return Math.random()*570 + 15; //possibly fixes the bug where food appeared outside of grid
}