function setup(){
  createCanvas(600, 600);
}

function draw(){
  background(random(255), random(255), random(255));
  stroke(0);
  noFill();
  drawCircle(300, 200, 600);
  noLoop();
}

function drawCircle(x, y, d){
  ellipse(x, y, d);
  if (d > 2) {
    let newD = d / 4;
    drawCircle(x + newD, y, newD);
    drawCircle(x - newD, y, newD);
    // drawCircle(x, y + 2 * newD, 2 * newD);
  }
}
