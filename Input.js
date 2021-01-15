function drawKeys(){

if (keys[40] || keys[83]) {
    // down arrow
    console.log('The page has fully loaded');
    //if(thePlayer.playY<(ctx.canvas.height-thePlayer.height-20))
    thePlayer.velY++;
    }
if (keys[38] || keys[87]) {
    // Up Arrow
    if(thePlayer.playY>40)
    thePlayer.velY--;
    }
if (keys[39] || keys[68]) {
    // right arrow
    if(thePlayer.playX<(ctx.canvas.width-thePlayer.width-20))
    thePlayer.velX++;
    }
if (keys[37] || keys[65]) {
    // left arrow
    if(thePlayer.playX>thePlayer.width / 2)
    thePlayer.velX--;
    }



if (keys[27])
{
    if(canPress == true)
    {
        let interval = 1000;

    PauseGame();
    setTimeout(buttonActive, interval);
    }
}



if (keys[77]) {
    if(gameState == "MainMenu")
    {
        ctx.drawImage(controlScreenImage, 0, 0)
    }
}

//FIRE BULLET
if(keys[32] && canFire) // spacebar
    {
    fireBullet();
    setTimeout(bulletActive, 1000)
    }



function buttonActive()
{
	canPress = true;
}
}