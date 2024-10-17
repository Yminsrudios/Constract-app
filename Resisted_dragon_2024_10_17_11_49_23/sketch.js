var a = 1;
function setup() {
  createCanvas(400, 650);
}

function draw() {
  background(100);
  fill(199);
  rect(1,1,500,50);
  noFill();
  
  fill(199);
  rect(1,610,500,50);
  noFill();
  
  fill(230);
  textSize(40);
  text("Project",100,40);
  noFill();
  
  fill(230);
  rect(10,100,380,50);
  noFill();
  
  if( mouseX >= 5 && mouseX <= 391 && mouseY >= 10 && mouseY <= 140 && mouseIsPressed == true ){
  a += 2;
  }
  if(a > 2){
      rede();
    }
}
function rede(){
  background(100);
  fill(199);
  rect(1,1,500,50);
  noFill();
  
  fill(199);
  rect(1,450,500,850);
  noFill();
  
  fill(0,0,200);
  textSize(40);
  text("back", 45 ,45);
  noFill();
}
