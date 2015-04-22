// Drawing 1

function setup() {
  createCanvas(600, 450);
  background(240);
  forest = loadImage('../img/forest.jpg');
  // stroke(255, 0, 0); // (red) remove this line
  // line(0, 0, 600, 450); // remove this line

  //tint variables
  red = 255;
  green = 255;
  blue = 0;
  opacity = 70;

  rotation = 0;


  shapeRotation = false;
  rotationSpeed = 0;


}

function draw() {
	// Drawing code goes here

  background(0,70);
  imageMode(CORNER);
  tint(red,green,blue,opacity);
  image(forest,0,0);


  rectMode(CENTER);
  translate(width/2, height/2);
  noStroke();

  if (shapeRotation == true){
    push();
    rotate(rotation);
    rotation += rotationSpeed;
    triangle(-70, 50, 0, -71, 70, 50);
    pop();
  }

  if (shapeRotation == false){
    rotate(rotation);
    triangle(-70, 50, 0, -71, 70, 50);
  }

}


function mousePressed() {
  if (shapeRotation == true){
    shapeRotation = false;
  }
  else{
    shapeRotation = true;
  }
  rotationSpeed = random(-.3,.3)

  if (red == 255){red = 0;} else{red=255;}
  if (green == 255){green = 0;} else{green=255;}
  if (blue == 255){blue = 0;} else{blue=255;}

}
