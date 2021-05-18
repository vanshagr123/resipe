var bullet,wall,speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
 thickness=random(22,83)
  speed=random(223,321);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,20) 
  bullet.velocityX = speed;
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(56, 255, 20) 
}

function draw() {
  background(0);
  
   
  if(hascolided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness
    if (damage>10){
      bullet.shapeColor=color(255,0,0)
    }
   
    if (damage<10){
      bullet.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}
function  hascolided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width
  wallLeftEdge=wall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
return false
}