function startGame(){

	backGroundImgX = 0;
	backgroundImgY = 0;
	backgroundImgYy = backgroundImgY - 800;
	foreGroundImgX = 0;
	foreGroundImgY = 0;
	foreGroundImgYy = foreGroundImgY - 800;
 currentScore = 0;
 isGamePaused = false;
    gameState = "PlayGame";
    backGroundMusic.currentTime = 0;
    backGroundMusic.play();

}


function showMenu(){
//menuScreenImage

    playBtnImage.src = "playbutton.png";
    menuScreenImage.src = "MainMenu.png";
    ctx.drawImage(menuScreenImage,0, 0);

    //ctx.drawImage(playBtnImage, buttonX[3], buttonY[3], buttonWidth[3], buttonHeight[3]);
 
    
    
    quitBtnImage.src = "quitbutton.png";

    ctx.canvas.addEventListener("mousemove", checkPos);
    ctx.canvas.addEventListener("mouseup", checkClick);

    //console.log("Showmenu Working");
};


function quitGame(){
		ctx.clearRect(0, 0, width, height);
		ctx.font = "30px Comic Sans MS";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		ctx.fillText("Game Over", 100, 20);
    }
    
    
function PauseGame(){
    clickSound.play();
    if(isGamePaused &&  gameState == "PlayGame")
    {
    backGroundMusic.play();
    isGamePaused = false;
    }
  else
  {
    backGroundMusic.pause();
    isGamePaused = true;
  }

  canPress = false;
}

function ResetGame()
{
  if(gameState == "GameOver")
  {
    enemies = [];
   // thePlayer
    gameState = "MainMenu";
    console.log("") + gameState;
  }
}

function showControls()
{
  gameState = "ControlScreen";
  console.log("Control Screen should be displayed");
  ctx.drawImage(controlScreenImage,0, 0);
}
  
/*	if (bgScrollSpeed > 0)
	
    {
		bgScrollSpeed=0;
		fgScrollSpeed = 0;
	}
    else
    {
		bgScrollSpeed = 1;
		var fgScrollSpeed = 1.5;
    }
    */