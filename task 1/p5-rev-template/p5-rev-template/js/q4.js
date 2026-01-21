/**
 * TASK 1: Yéléna and Scarlett
 */

"use strict";

// canvas size
const canvasW = 600;
const canvasH = 400;

// rectangle size
let rectW;
let rectH;

// rectangle positions
let r1X;
let r2X;
let r3X;
let rY = 0;

// color objects
const blue1 = { r: 0, g: 100, b: 255 };
const blue2 = { r: 0, g: 150, b: 200 };
const blue3 = { r: 0, g: 50, b: 180 };

function setup() {
  createCanvas(canvasW, canvasH);

  rectW = width / 3;
  rectH = height;

  r1X = 0;
  r2X = rectW;
  r3X = rectW * 2;
}

function draw() {
  background(220);

  // Recangle 1
  let overR1 = false;

  if (mouseX > r1X) {
    if (mouseX < r1X + rectW) {
      if (mouseY > rY) {
        if (mouseY < rY + rectH) {
          overR1 = true;
        }
      }
    }
  }

  if (overR1) {
    fill(255);
  } else {
    fill(blue1.r, blue1.g, blue1.b);
  }
  rect(r1X, rY, rectW, rectH);

  // Recangle 2
  let overR2 = false;

  if (mouseX > r2X) {
    if (mouseX < r2X + rectW) {
      if (mouseY > rY) {
        if (mouseY < rY + rectH) {
          overR2 = true;
        }
      }
    }
  }

  if (overR2) {
    fill(255);
  } else {
    fill(blue2.r, blue2.g, blue2.b);
  }
  rect(r2X, rY, rectW, rectH);

  // Recangle 3
  let overR3 = false;

  if (mouseX > r3X) {
    if (mouseX < r3X + rectW) {
      if (mouseY > rY) {
        if (mouseY < rY + rectH) {
          overR3 = true;
        }
      }
    }
  }

  if (overR3) {
    fill(255);
  } else {
    fill(blue3.r, blue3.g, blue3.b);
  }
  rect(r3X, rY, rectW, rectH);
}
