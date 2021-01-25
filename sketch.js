function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  /*strokeWeight(4);
  stroke("gold");
  fill(0);
  ellipse(400,400,680,680);*/


  noStroke();
  fill(200);
  textSize(30);
  text("1",525,200);   
  text("2",620,283); 
  text("3",650,410); 
  text("4",610,530); 
  text("5",525,615); 
  text("6",400,640); 
  text("7",260,614);  
  text("8",180,525);
  text("9",150,415);
  text("10",180,290); 
  text("11",260,200); 
  text("12",380,150);

  var hr=hour();
  var m=minute();
  var s=second();

  translate(400,400);
  rotate(-90)

  var scAngle=map(s,0,60,0,360);
  var mnAngle=map(m,0,60,0,360);
  var hrAngle=map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("yellow");
  strokeWeight(9);
  line(0,0,200,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("brown");
  strokeWeight(9);
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  

  strokeWeight(11);
  noFill();
  stroke("purple");
  arc(0,0,605,605,0,scAngle);

  stroke("blue");
  arc(0,0,630,630,0,mnAngle);
  
  stroke("green");
  arc(0,0,655,655,0,hrAngle);
  
  
}

  
