function Food() {
    this.size = createVector(15, 15);
    this.appear = function() {
        fill('red');
        rect(100, 100, this.size.x, this.size.y);
    }

}