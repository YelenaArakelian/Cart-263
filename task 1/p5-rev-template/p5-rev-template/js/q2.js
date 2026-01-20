/**
 * TASK 1: Yéléna and Scarlett
 */

"use strict";
function setup() {
  createCanvas(500, 500);
  fill(150, 0, 255);
  drawEllipse();
}

function draw() {
  background(200);

  drawEllipse(50, 50, 80, 80, 100, 255, 255);
  drawEllipse(150, 150, 100, 100, 255, 100, 255);
  drawEllipse(250, 250, 40, 40, 255, 255, 100);
}
function drawEllipse(x, y, w, h, r, g, b) {
  noStroke();
  fill(r, g, b);
  ellipse(x, y, w, h);
}
