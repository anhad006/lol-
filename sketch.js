var pathImg,path
var runner,Runner1Img

function preload(){
  //pre-load images
pathImg=loadImage("path.png")
Runner1Img = loadAnimation(Runner-2)

}

function setup(){ 
  createCanvas(500,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale= 1.2
  runner=createSprite(200,200)
runner.addAnimation(Runner1Img)
}

function draw() {
  background(0)
drawSprites()
if(path.y>400){
  path.y = height/2
}
}