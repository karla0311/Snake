//variables
let x = 200;
let y = 200;
let direction = 39;

//game variables
let gameOver = false;

//display
function setup() {
  createCanvas(400, 400);
  background(229, 216, 243);
  fill(0);
  rect(10, 10, 380, 380);
  fill(243, 229, 216);
  textSize(24)
  textSize(24);
  textAlign(CENTER);
}

function draw() {
  if (gameOver === true) {
    return;
  }
  human();
}

function human() {
// when snake hits somehing else
  if (notBlack(x,y) === true) {
    fill(255);
    text("GAME OVER\nYou Lose\nPress 'r' to restart", 200, 180);
    gameOver = true;
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(x, y, 10, 10);
  }
  fill(243, 216, 223);
  rect(0, 0, 75, 25);
  fill(255);
  text(frameCount, 37, 20);
  stroke(255);
  point(x, y);
  if (direction === 37) {
    x = x - 1;
  }
  if (direction === 38) {
    y = y - 1;
  }
  if (direction === 39) {
    x = x + 1;
  }
  if (direction === 40) {
    y = y + 1;
  }
}

function keyPressed() {
  if (keyCode === 37) { //left
    direction = 37;
  }
  if (keyCode === 38) { //
    direction = 38;
  }
  if (keyCode === 39) {
    direction = 39;
  }
  if (keyCode === 40) {
    direction = 40;
  }
  if (key === 'r') {
    x = 200;
    y = 200;
    gameOver = false;
    direction = 39;
    background(216, 243, 236);
    fill(0);
    rect(10, 10, 380, 380);
    fill(243, 236, 216);
    frameCount = 0;
  }
}

function notBlack(x, y) {
  let a = get(x, y);
  if (a[0] !== 0) return true;
  else if (a[1] !== 0) return true;
  else if (a[2] !== 0) return true;
  return false;
}
