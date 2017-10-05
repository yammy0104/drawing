var xPos = 5;

function setup () {
  createCanvas (600, 400);
}

function draw () {
  background(250,250,100);
  stroke (150,0,150);
  strokeWeight(10);

  if (mouseX > 300) {
    line (0,0,600,400);
  } else if (mouseX > 200) {
    fill (255,0,0);
    rect (200,200,100,100);
  } else if (mouseX > 100) {
    fill (0,255,0);
    triangle (300,400,200,150,600,400);
  }
    else {
      fill (0,0,255);
      ellipse (40,40,200,200);
    }
}
