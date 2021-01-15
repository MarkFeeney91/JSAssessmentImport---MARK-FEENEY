class Player {
    constructor() {
       this.playX = width / 2;
       this.playY = height /2;
       this.width = 64;
       this.height = 64;
       this.velX = 4;
       this.velY = 4;
       this.radius = 32;
       this.xOrigin = this.playX + this.radius;
       this.yOrigin = this.playY + this.radius;
    }
}

//var thePlayer = new Player();


function UpdatePosition()
{
    thePlayer.velX *= friction;
    thePlayer.velY *= friction;

    thePlayer.playX += thePlayer.velX;
    thePlayer.playY += thePlayer.velY;

    thePlayer.xOrigin = thePlayer.playX + thePlayer.radius;
    thePlayer.yOrigin = thePlayer.playY + thePlayer.radius;
}