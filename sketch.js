var fixedrect,movingrect
function setup() {

  createCanvas(800,400);
  movingrect=createSprite(200, 200, 60, 50);
  fixedrect=createSprite(400,200,70,45);
  object21=createSprite(100,300,50,50);
  object22=createSprite(400,300,50,50);

  object21.velocityX=1;
  object22.velocityX=-1;
}

function draw() {
  background(255,255,255); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  
  if(isTouching(movingrect,object21))
  {
    movingrect.shapeColor="red"
    object21.shapeColor="red"
  }
  else{
    movingrect.shapeColor="blue"
    object21.shapeColor="green"
  }
  object22.shapeColor="purple"

  bounceOff(object21,object22)
  drawSprites();
}