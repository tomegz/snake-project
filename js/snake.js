function Snake(posX, posY) {
    var checkExtreme = function(position, direction) {
        if(position >= 585 && direction === 1){
            return -15;
        } else if(position < 15 && direction === -1){
            return 600;
        }
        return position;
    }
    var hasManyParts = function(body) {
        if(body.length > 1){
            return true;
        } else {
            return false;
        }
    }
    this.height = 15;
    this.width = 15;
    this.x = posX/2; //need to check if this could be vector
    this.y = posY/2;
    this.score = 1;
    this.body = [createVector(this.x, this.y)];
    this.velocity = 15;
    this.direction = createVector(0, 0);
    this.directionQueue = [createVector(0, 0)];
    this.addDirection = function(x, y) {
        var lastDir = this.directionQueue.length - 1;
        if(this.directionQueue[lastDir].x + x != 0 || this.directionQueue[lastDir].y + y != 0){ // change direction only if possible
            this.directionQueue.push(createVector(x, y));
        }
    };
    this.show = function() {
        //loop through body array and draw rectangles 
        for(var i=0; i < this.body.length; i++){
            rect(this.body[i].x, this.body[i].y, this.height, this.width);
        }
    };
    this.update = function() {
        for(var i = this.body.length - 1, dirX, dirY; i >= 0; i--){ 
            if(i === 0){ // update snake's head
                if(this.directionQueue.length > 1){
                    this.direction = this.directionQueue.shift();
                } else if(this.directionQueue.length === 1) {
                    this.direction = this.directionQueue[0];
                }
                dirX = this.direction.x;
                dirY = this.direction.y;
                this.body[i].x = checkExtreme(this.body[i].x, dirX) + this.velocity * dirX;
                this.body[i].y = checkExtreme(this.body[i].y, dirY) + this.velocity * dirY;
            } else { // each tail part gets position which is previous position of last tail part
                this.body[i].x = this.body[i-1].x;
                this.body[i].y = this.body[i-1].y;
            }
        }
    };
    this.grow = function() {
        this.score += 1;
        this.body.push(this.newBodyPart());
    }
    this.newBodyPart = function() {
        var lastBodyPart = this.body[this.body.length - 1];
        return createVector(lastBodyPart.x + (15*this.direction.x), lastBodyPart.y + (15*this.direction.y));
    }
    this.checkIfAlive = function() {
        if(hasManyParts(this.body)){
            var head = this.body[0];
            for(var i = 1; i < this.body.length - 1; i++){
                if (head.x === this.body[i].x && head.y === this.body[i].y){
                    this.gameOver();
                } 
            }
        }
    }
    this.gameOver = function() {
        noLoop();
        textSize(50);
        textAlign(CENTER);
        text("GAME OVER", 300, 300);
    }
}