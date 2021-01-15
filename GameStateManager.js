function handleGameStates()
{

    
    if(gameState == "MainMenu")
	{
    showMenu();
    drawKeys();
	}

    if(gameState == "PlayGame")
	{
    ScrollBackground();
    animationFrame();
    UpdateBackground();
    UpdateEnemy();
    UpdateBullet();
    drawKeys();
    UpdatePosition();
    updateScore();
    //SpawnEnemy();
    }

    if(gameState == "gameOver")
    {
        drawDeadScore();
    }
}