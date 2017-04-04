function Snake(posX, posY) {
    this.height = 15;
    this.width = 15;
    this.x = posX/2; //need to check if this could be vector
    this.y = posY/2;
    this.score = 1;
    this.body = [createVector(this.x, this.y)];
    this.velocity = 15;
    this.direction = createVector(0, 0);
    this.changeDirection = function(x, y) {
        if(this.direction.x + x != 0 || this.direction.y + y != 0){ // change direction only if possible
            this.direction = createVector(x, y);
        }
    };
    this.show = function() {
        //loop through body array and draw rectangles 
        for(var i=0; i < this.body.length; i++){
            console.log("here");
            rect(this.body[i].x, this.body[i].y, this.height, this.width);
        }
    };
    this.update = function() {
        //loop through body array and update positions
        //this.body[0].x += this.velocity * this.direction.x;
        //this.body[0].y += this.velocity * this.direction.y;
        for(var i = this.body.length - 1; i >= 0; i--){ // can i refactor this?
            if(i === 0){ // update snake's head
                this.body[i].x += this.velocity * this.direction.x;
                this.body[i].y += this.velocity * this.direction.y;
            } else { // each tail part gets position which is previous position of last tail part
                this.body[i].x = this.body[i-1].x;
                this.body[i].y = this.body[i-1].y;
            }
        }
        //this.x = this.x + (this.velocity * this.direction.x);
        //this.y = this.y + (this.velocity * this.direction.y);
    };
    this.grow = function() {
        this.score += 1;
        this.body.push(this.newBodyPart());
    }
    this.newBodyPart = function() {
        var lastBodyPart = this.body[this.body.length - 1];
        return createVector(lastBodyPart.x + (15*this.direction.x), lastBodyPart.y + (15*this.direction.y));
    }
}