function animationFrame()
{
		let elapsed = (Date.now() - startTimeMS)/1000;
		startTimeMS = Date.now();

		//only update frames when timer is below 0
		frameTimer = frameTimer - elapsed;
		if(frameTimer <= 0)
		{
			frameTimer = frameTimeMax;
			frameX++;
			if(frameX>frameXMax)
			{
			  frameX = 0;
			  frameY++;
			  //end of row, move down to next row in sheet
			  if(frameY>frameYMax)
			  {
				  frameY = 0;
			  }
			}
			currentframe++;
			//reset frames to 0 in event that there are empty spaces on sprite sheet
			if(currentframe > frameMax)
			{
			  currentframe = 0;
			  frameX = 0;
			  frameY = 0;
			}
		}
	
}