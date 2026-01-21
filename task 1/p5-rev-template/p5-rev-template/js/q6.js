/**
 * TASK 1: Yéléna and Scarlett
 */

"use strict";

let shapeSize = 25;
let spacing;

// random colors for shapes
let r;
let g;
let b;

let isCircle = true;

function setup() {
  createCanvas(600, 600);
  spacing = shapeSize + 5;
  randomizeColor();
}

function draw() {
  background(0);

  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      fill(r, g, b);
      noStroke();

      if (isCircle) {
        circle(x, y, shapeSize);
      } else {
        rectMode(CENTER);
        rect(x, y, shapeSize, shapeSize);
      }
    }
  }
}

function keyPressed() {
  if (key === " ") {
    randomizeColor();
  }
}

function mousePressed() {
  isCircle = !isCircle;
}

function randomizeColor() {
  r = random(255);
  g = random(255);
  b = random(255);
}
