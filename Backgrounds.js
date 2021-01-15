function UpdateBackground()
{


if (backgroundImgY >= ctx.canvas.height)
{
   backgroundImgY = -800;
}

if (backgroundImgYy >= ctx.canvas.height)
{
   backgroundImgYy = -800;
}

if (foreGroundImgY >= ctx.canvas.height)
{
   foreGroundImgY = - 800;
}

if (foreGroundImgYy >= ctx.canvas.height)
{
   foreGroundImgYy = - 800;
}
}

function ScrollBackground()
{
    if(!isGamePaused)
    {
    let bgScrollSpeed = 1;
	let fgScrollSpeed = 5.5;

    backgroundImgY += bgScrollSpeed * speedModifier;
    backgroundImgYy += bgScrollSpeed * speedModifier;
   foreGroundImgY += fgScrollSpeed * speedModifier;
   foreGroundImgYy += fgScrollSpeed * speedModifier;
    }
    else
    {
        bgScrollSpeed = 1;
        fgScrollSpeed = 5.5;
    }
}