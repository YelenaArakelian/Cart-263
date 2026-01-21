/**
 * TASK 1: Yéléna and Scarlett
 */

"use strict";

/**squares set up */

//square 1
const s1Size = 50;
let s1X = 100;
let s1Y = 100;

//square 2
const s2Size = 70;
let s2X = 150;
let s2Y = 150;

//square 3
const s3Size = 80;
const s3Speed = 2;
let s3X = 100;
let s3Y = 220;

function setup() {
  console.log("go");
  createCanvas(500, 500);
  drawSquare();
}

function draw() {
  background("#ac55e6");

  //squares
  drawSquare(s1X, s1Y, s1Size, s1Size, 206, 56, 156);
  drawSquare(s2X, s2Y, s2Size, s2Size, 224, 176, 255);
  drawSquare(s3X, s3Y, s3Size, s3Size, mouseX, mouseY, 255);

  //make square 3 move
  s3Y += s3Speed;
  //reset square 3 when it touches the bottom
  if (s3Y > height) {
    s3Y = 0;
  }
}
function drawSquare(x, y, w, h, r, g, b) {
  //body
  push();
  noStroke();
  fill(r, g, b);
  rect(x, y, w, h);
  pop();
}

//Update square 1 position when mouse is clicked
function mouseClicked() {
  s1X = random(0, width);
  s1Y = random(0, height);
}

//Update square 2 position when key is pressed
function keyPressed() {
  if (key === " ") {
    //spacebar
    s2X = random(0, width);
    s2Y = random(0, height);
  }
}
