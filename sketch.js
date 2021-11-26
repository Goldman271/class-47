var backgroundImage

function preload (){
backgroundImage = loadImage("./pictures/Background image.jpg")
}

function setup (){
  createCanvas (1200,900)
  background1 = createSprite(100,100, 1200, 900)
  background1.addImage("background1",backgroundImage);
}


function draw() {
  background(0)
  background1.velocityX = (-12);
  
  drawSprites();
}