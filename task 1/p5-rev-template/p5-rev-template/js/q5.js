/**
 * TASK 1: Yéléna and Scarlett
 */

"use strict";

// GLOBAL VARIABLES

let counter = 0;
// number of ellipses to draw
let radius = 20;
let ellipseAlpha = 20;

// ORANGE SQUARE
let orangeSquare = {
  x: 100,
  y: 100,
  w: 100,
  h: 100,
  color: "orange",
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  // draw the square
  displaySquare();

  // only draws if counter is between 1 and 10
  if (counter >= 1 && counter <= 10) {
    let i = 0;
    let currentRadius = radius;
    let currentAlpha = ellipseAlpha;

    while (i < counter) {
      fill(255, currentAlpha);
      noStroke();
      ellipse(width / 2, height / 2, currentRadius, currentRadius);

      // increases size and alpha for next ellipse
      currentRadius = currentRadius + 15;
      currentAlpha = currentAlpha + 20;

      i = i + 1;
    }
  }
}

function displaySquare() {
  // lighter orange when hovered
  if (checkCollisionWithSquare(orangeSquare)) {
    fill(255, 180, 100);
  } else {
    fill(255, 140, 0);
  }

  noStroke();
  rect(orangeSquare.x, orangeSquare.y, orangeSquare.w, orangeSquare.h);
}

function checkCollisionWithSquare(square) {
  if (
    mouseX > square.x &&
    mouseX < square.x + square.w &&
    mouseY > square.y &&
    mouseY < square.y + square.h
  ) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  if (checkCollisionWithSquare(orangeSquare)) {
    counter = counter + 1;
  }
}
