var box2,box1,box3;

function setup(){
  createCanvas(800,800);

  box1 = createSprite(400,400,50,150);
  box1.shapeColor = "red";

  box2 = createSprite(100,100,150,50);
  box2.shapeColor = "blue";

  box3 = createSprite(300,50,100,50);
  box3.shapeColor = "green";

  box1.debug = true;
  box2.debug = true;
}

function draw(){
  background(0);

  box2.x = World.mouseX;
  box2.y = World.mouseY;

 if(touch(box1,box2)){
   box1.x = random(100,700);
   box1.y = random(100,700);
 }

 if(touch(box3,box2)){
   box3.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
 }
  drawSprites();
}
