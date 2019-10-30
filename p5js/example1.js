
let posX, posY;
let velX, velY;

function setup() {
  var canvasDiv = document.getElementById('myCanvas');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,300);
  console.log(sketchCanvas);
  sketchCanvas.parent("myCanvas");
  posX = random(width);
  posY = 30;
  velX = random(-5,5);
  velY = random(-5,5);
}

function draw() {
  background(220);
  posX = posX + velX;
  posY = posY + velY;
  ellipse(posX,posY,13,13);
  if (posX <= 0 || posX >= width) {
    velX = velX*-1;
  }
  if (posY <= 0 || posY >= height) {
    velY = velY*-1;
  }

  rectMode(CENTER);
  rect(mouseX,height-10,50,8);
}
