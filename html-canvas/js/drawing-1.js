// Drawing 1

function setup() {
  createCanvas(600, 450);
  background(240);
  // stroke(255, 0, 0); // (red) remove this line
  // line(0, 0, 600, 450); // remove this line

}

function draw() {
	// Drawing code goes here
  stroke(0);
  line(0,0,600,400);
  noStroke();

  fill (0,0,200,100);
  rect(200,100,200,200);

  fill(0,200,0,100);
  ellipse(300,200,150,150);

  fill(200,0,0,100);
  triangle(275,225,325,225,300,175);

  fill(0,255,255,100);
  quad(300,150, 450, 150, 300, 350, 140, 350);

  translate(300,200);

  fill(255,255,0,100);

  for (var i = 0; i < 20; i++) {
    rect(0,0, 75,75);
    rotate(PI/10);
  }


}
