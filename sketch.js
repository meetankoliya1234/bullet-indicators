var bullet,wall;

var speed,weight,thickness;

function setup() {
  createCanvas(1100,400);


  thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);

 car=createSprite(50,200,50,5);

wall=createSprite(1000,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

car.velocityX=speed;

}

function draw() {
  background(0); 
 
 if(hasCollided(car,wall))
  {
    car.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
   if(damage>10)
  {
     wall.shapeColor="green";
 }

 if(damage<10){
  wall.shapeColor="red";
 }

 }


  drawSprites();
}

 function hasCollided(lbullet,lwall)
 {
  carRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(carRightEdge>=wallLeftEdge)
  {
  return true;
  }
  return false;
}