var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("GettyImages-453347919.jpg");
  bg2 = loadImage("soccer-ball.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg2);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg)
    fill("black")
    textSize(40);
    text("WORLDCUP WON",250, 200);
  }

  drawSprites()
}