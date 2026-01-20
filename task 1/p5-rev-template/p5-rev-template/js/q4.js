/**
 * TASK 1: Yéléna and Scarlett
 */

"use strict";

let rectWidth;
let rectHeight;

let r1X, r2X, r3X;
let rY = 0;

// rectangle 1 color (dark blue)
let r1R = 0;
let r1G = 0;
let r1B = 128;

// rectangle 2 color (bright blue)
let r2R = 0;
let r2G = 255;
let r2B = 255;

// rectangle 3 color (sky blue)
let r3R = 137;
let r3G = 207;
let r3B = 240;

function setup() {
  createCanvas(600, 600);

  // size of rectangles
  rectWidth = width / 3;
  rectHeight = height;

  // x positions
  r1X = 0;
  r2X = rectWidth;
  r3X = rectWidth * 2;
}

function draw() {
  background(220);

  // Rectangle 1
  let mouseOnR1 = false;

  if (mouseX > r1X) {
    if (mouseX < r1X + rectWidth) {
      if (mouseY > rY) {
        if (mouseY < rY + rectHeight) {
          mouseOnR1 = true;
        }
      }
    }
  }

  if (mouseOnR1) {
    fill(255);
  } else {
    fill(r1R, r1G, r1B);
  }

  noStroke();
  rect(r1X, rY, rectWidth, rectHeight);

  // Rectangle 2
  let mouseOnR2 = false;

  if (mouseX > r2X) {
    if (mouseX < r2X + rectWidth) {
      if (mouseY > rY) {
        if (mouseY < rY + rectHeight) {
          mouseOnR2 = true;
        }
      }
    }
  }

  if (mouseOnR2) {
    fill(255);
  } else {
    fill(r2R, r2G, r2B);
  }

  rect(r2X, rY, rectWidth, rectHeight);

  // Rectangle 3
  let mouseOnR3 = false;

  if (mouseX > r3X) {
    if (mouseX < r3X + rectWidth) {
      if (mouseY > rY) {
        if (mouseY < rY + rectHeight) {
          mouseOnR3 = true;
        }
      }
    }
  }

  if (mouseOnR3) {
    fill(255);
  } else {
    fill(r3R, r3G, r3B);
  }

  rect(r3X, rY, rectWidth, rectHeight);
}
