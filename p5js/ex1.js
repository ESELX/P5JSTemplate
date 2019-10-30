


function setup() {
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,300);
  console.log(sketchCanvas1);
  sketchCanvas.parent('ex1');
}

function draw() {
  background(200);

  fill(255, 191, 15);
  stroke(51);
  strokeWeight(4);
  rect(20,20,70,70);

  noFill();
  stroke(51);
  strokeWeight(2);

  ellipse(90,90,70,70);

  triangle((width/2)-30, height/2+30, (width/2)+30, height/2+30, width/2, (height/2)-30);

  bezier(20, 20, width/2, height, width/2, height, width-20, 20)
  bezier(20, 20, mouseX, mouseY, mouseX, mouseY, width-20, 20)
}
