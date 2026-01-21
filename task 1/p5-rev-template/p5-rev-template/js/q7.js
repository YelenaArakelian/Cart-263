/**
 * TASK 1: Yéléna and Scarlett
 */

"use strict";

let shapeSize = 50; 
let isCircle = true;
let r, g, b;

function setup() {
  createCanvas(600, 600);
  
  // random color
  r = random(255);
  g = random(255);
  b = random(255);
  
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(0);
  fill(r, g, b);

  // Draws grid of shapes
  for (let x = 0; x <= width; x += shapeSize * 1.5) {
    for (let y = 0; y <= height; y += shapeSize * 1.5) {
      
      if (isCircle) {
        circle(x, y, shapeSize);
      } else {
        rect(x, y, shapeSize, shapeSize);
      }
      
    }
  }
}

// Spacebar changes color
function keyPressed() {
  if (key === ' ') {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

// Mouse click toggles shape
function mousePressed() {
  if (isCircle === true) {
    isCircle = false;
  } else {
    isCircle = true;
  }
}