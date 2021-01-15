function bulletActive()
{
	canFire = true;
}


function fireBullet()
{
	if(canFire)
	{
   shootAud.play();
   playerBullets.push(new Bullet);
   //SpawnEnemy();
   //enemies.push(new Enemy);
 //  console.log("the current bullet array length is " + playerBullets.length);
  // console.log("the current enemy array length is " + enemies.length);
   canFire = false;
	}
	else
	{
		return;
	}
}


class Bullet {
	constructor() {
		this.xPos = thePlayer.playX;
		this.yPos = thePlayer.playY;
		this.height = 16;
		this.width = 16;
		this.bulletType = 1;
		this.xSpeed = 0;
		this.ySpeed = -4;
		this.bulletDestroyed = false;
		this.radius = 8;
		this.xOrigin = this.xPos + this.radius;
		this.yOrigin = this.yPos + this.radius;
	}
}


function UpdateBullet()
{
for(var i = 0; i < playerBullets.length; i++)
{
	if(playerBullets[i].bulletDestroyed == false)
	{
	//BulletMovement(playerBullets[i].xPos, playerBullets[i].yPos, playerBullets[i].xSpeed, playerBullets[i].ySpeed)
 		ctx.drawImage(bulletImage, playerBullets[i].xPos, playerBullets[i].yPos);


		 if(isGamePaused == false)
		 {
 		 playerBullets[i].xPos += playerBullets[i].xSpeed;
		 playerBullets[i].yPos += playerBullets[i].ySpeed;
		 }

 		playerBullets[i].xOrigin = playerBullets[i].xPos + playerBullets[i].radius;
		playerBullets[i].yOrigin = playerBullets[i].yPos; + playerBullets[i].radius;
		 

		/*ctx.strokeStyle = "#008000";
		ctx.beginPath();
		console.log("the enemy xposition i is" + enemies[i].yPos);
		console.log("the enemy yOrigin is" + enemies[i].yOrigin);
		ctx.moveTo(playerBullets[i].xOrigin, playerBullets[i].yOrigin);           //FOR DEBUGGING
		ctx.lineTo(thePlayer.xOrigin, thePlayer.yOrigin);
		ctx.stroke();
 console.log(" my Yposition is " +playerBullets[i].yPos);*/
	}

	if(playerBullets[i].yPos < 0 || playerBullets[i].yPos > 800 || playerBullets[i].xPos < 0 || playerBullets[i].xPos > 450)
	{
	playerBullets[i].bulletDestroyed = true;	
	playerBullets.splice(playerBullets[i], 1)
	}
}

}