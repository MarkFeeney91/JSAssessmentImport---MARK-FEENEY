class Enemy{
	constructor() {


		this.xPos = 200;
		this.yPos = -100;
		this.xSpeed = 0;
		this.ySpeed = 0;
		this.enemyDestroyed = false;
		this.spawned = false;
		this.width = 64;
		this.height = 64;
		this.xOrigin = 0;
		this.yOrigin = 0;
		this.radius = 26;
		this.enemyType = getRndInteger(0,2)

		
	}
}

function UpdateEnemy()
{
	for(var i = 0; i < enemies.length; i++)
	{
		if(enemies[i].enemyDestroyed == false)
		{			
			if(enemies[i].enemyType == 0)
			{
			ctx.drawImage(enemyImage, spriteWidth*frameX, spriteHeight*frameY, spriteWidth, spriteHeight,enemies[i].xPos, enemies[i].yPos, enemies[i].width, enemies[i].height);
			enemies[i].ySpeed = 2;
			}
			else
			if(enemies[i].enemyType == 1)
			{
			ctx.drawImage(enemyImage2, spriteWidth*frameX, spriteHeight*frameY, spriteWidth, spriteHeight,enemies[i].xPos, enemies[i].yPos, enemies[i].width, enemies[i].height);
			enemies[i].ySpeed = 5;
			}
			else
			if(enemies[i].enemyType == 2)
			{
			ctx.drawImage(enemyImage3, spriteWidth*frameX, spriteHeight*frameY, spriteWidth, spriteHeight,enemies[i].xPos, enemies[i].yPos, enemies[i].width, enemies[i].height);
			enemies[i].ySpeed = 3;
			}

		if(isGamePaused == false)
		{
		enemies[i].xPos += enemies[i].xSpeed * speedModifier;
    	enemies[i].yPos += enemies[i].ySpeed * speedModifier;
		}
		

		enemies[i].xOrigin = enemies[i].xPos + enemies[i].radius;
		enemies[i].yOrigin = enemies[i].yPos + enemies[i].radius;
		ctx.strokeStyle = "#ffffff";
		
		ctx.beginPath();

		if(colCheck(thePlayer, enemies[i]))
		{
			gameOver();
			console.log("Eureka!");
		}

		ctx.moveTo(enemies[i].xOrigin, enemies[i].yOrigin);
		ctx.lineTo(thePlayer.xOrigin, thePlayer.yOrigin);
		ctx.stroke();		
		}






		if(enemies[i].yPos > 800 || enemies[i].xPos < 0 || enemies[i].xPos > 450)
		{
			RemoveEnemy(enemies, enemies, i)
		}
		for(var j = 0; j < playerBullets.length; j++)
		{
			if(colCheck(enemies[i], playerBullets[j]))
			{
				enemies[i].enemyDestroyed = true;	
				enemies.splice(enemies[i], 1);
				currentScore = currentScore+10;
				playerBullets[j].bulletDestroyed = true;	
				playerBullets.splice(playerBullets[j], 1)
			    console.log("Test2");
			}
		}
	}
}




function RemoveEnemy(enemy, enemiesArray, i)
{
	enemy.enemyDestroyed = true;	
	enemiesArray.splice(enemiesArray[i], 1)
}




function SpawnEnemy()
{
	
	enemySpawnTimer = getRndInteger(6000, 8000);
	console.log("Enemy spawned. Spawn timer is now" + enemySpawnTimer);


	if(gameState == "PlayGame")
	{

	enemies.push(new Enemy);


	for(var i = 1; i < enemies.length; i++)
		{
		if(enemies[i].spawned == false)
			{
			enemies[i].xPos = getRndInteger(50, 400);
			enemies[i].spawned = true;
			}
		}

	}
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
  }