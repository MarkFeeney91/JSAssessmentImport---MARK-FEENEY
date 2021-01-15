function updateScore(){

    ctx.font = "30px Arial";
    ctx.strokeText("Score : " + currentScore, 10, 50);



    if(isGamePaused == false)
    {
        speedModifier = 0;
        
    }
    {
    if(score <100)
    {
        speedModifier = 1;
    }
    else
    if (score >= 100 && score <= 200)
    {
            speedModifier = 10;
    }
    else
    if(score >= 201 && 400)
    {
        speedModifier = 1.8;
    }
    else
    if(score >= 401 && 600)
    {
        speedModifier = 2.5;
    }
}

}

function drawDeadScore()
{
    ctx.font = "50px Arial";
    ctx.fillText("Score : " + currentScore, 200, 200 );
    console.log ("I AM BEING DRAWN");
}
