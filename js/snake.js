function Snake(posX, posY) {
    this.height = 15;
    this.width = 15;
    this.x = posX/2; //need to check if this could be vector
    this.y = posY/2;
    this.velocity = 15;
    this.direction = createVector(0, 0);
    this.changeDirection = function(x, y) {
        this.direction = createVector(x, y);
    };
    this.show = function() {
        rect(this.x, this.y, this.height, this.width);
    };
    this.update = function() {
        this.x = this.x + (this.velocity * this.direction.x);
        this.y = this.y + (this.velocity * this.direction.y);
    };
}