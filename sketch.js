var fireworks = [];
var gravity;
let newFont1, newFont2, newFont3;

function preload() {
  newFont1 = loadFont('assets/Good Mood.otf');
  newFont2 = loadFont('assets/Regular.ttf');
  newFont3 = loadFont('assets/Multicolore Pro.otf');
}

function setup() {
  createCanvas(800, 600);

  gravity = createVector(0, 0.2);

  stroke(255);
  strokeWeight(100);

}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 40);

  if (random(1) < 0.1) {
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  textFont(newFont2);
  text('Tartaruga e Pinguim', 170, 250);
  text('2 MESES', 300, 340);
  textSize(30);
  text('11 / 10 / 2020', 310, 400);
  textSize(50);
}