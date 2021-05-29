var box,box1;

function setup(){
  createCanvas(400,400);

  box = createSprite(200,10,30,30);

  box1 = createSprite(10,200,50,50);
}

function draw(){
  background("lightblue");
  drawSprites();
}