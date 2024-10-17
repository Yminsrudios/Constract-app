var a = 100;
function setup() {
  createCanvas(400, 800);
}

function draw() {
  background(220);
  fill(255);
  rect(a,100,50,50);
  noFill();
  if(mouseIsPressed){
    background(200,100,20);
  }
  fill(100,200,0);
  rect(100,50,50,50);
  noFill();
}