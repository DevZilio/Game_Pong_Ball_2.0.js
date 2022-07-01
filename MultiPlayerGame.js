function setup() {
  createCanvas(600, 400);
  begin();
  ThemeM.loop();
}


function MultiPlayerGame() {
  background(backgroundTable);
  stroke(255);
  strokeWeight(2);
  showBall();
  moveBall();
  boardBall();
  showRacketPlayer();
  showRacketIA();
  moveRacket();
  moveRacketMultiplayer();
  touchRacket();
  touchRacketIA();
  score();
  getscore();
  winningMultiplayer();
  youLose();
  youWin();
}

function youWin(){
  if(myscore==5){
    textSize(60)
    text("You    Win", 308, 198);
  }
}

function youLose(){
  if(oppscore==5){
    textSize(60)
    text("You    Lose", 308, 198);
  }
}

function winningMultiplayer() {
  if(myscore == 5) {
    WinM.play();
    ThemeM.stop();
    noLoop();
    
    rect(Botton3X,Botton3Y,Botton3W,Botton3H)
    fill(color(0));
    text("Main Back",440,320)
  }
  if(oppscore == 5) {
    WinM.play();
    ThemeM.stop();
    noLoop();
    
    rect(Botton3X,Botton3Y,Botton3W,Botton3H)
    fill(color(0));
    text("Main Back",440,320)
  }
}
