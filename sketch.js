var ground;
var wolf;
var invisibleGround;
var log;

function preload(){
groundImg = loadImage("grass.jpg")
wolfImg = loadImage("wolf.gif")
logImg = loadImage("log-removebg-preview.png")
}

function setup() {
 createCanvas(700,500)
 ground = createSprite(700,300)
ground.addImage(groundImg)
ground.velocityX = 5

wolf = createSprite(570,410)
wolf.addImage(wolfImg)
wolf.scale = 0.3

invisibleGround = createSprite(350,500,700,10)
invisibleGround.visible = false;

}

function draw() {
 background(96)

 if(ground.x > width){
    ground.x = width/2;
  }
  if(keyDown("space")){
    wolf.velocityY = -6
    
}
wolf.velocityY+=0.6
    

wolf.collide(invisibleGround)

 wolf.debug = true;
 wolf.setCollider("rectangle", 100, 100, 20, 80, -45)

 spawnObstacle()
 drawSprites()
 
 wolf.collide(log)
}




function spawnObstacle(){
  
    if(frameCount%88 == 0){
      log = createSprite(600,480,20,20)
      log.scale = 0.2
      log.x = Math.round(random(50))
      log.addImage(logImg)
      log.velocityX = 5;
      log.depth = wolf.depth - 1
     
    }

  }