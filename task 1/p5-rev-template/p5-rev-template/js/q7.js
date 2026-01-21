"use strict";

// TEXT SETTINGS
const word = "test";
const textSizeValue = 28;
const textColor = 255;
const spacing = 20;

function setup() {
  createCanvas(400, 400);
  background(0);

  fill(textColor);
  textSize(textSizeValue);
  textAlign(CENTER, CENTER);

  // CENTER TEXT
  let centerX = width / 2;
  let centerY = height / 2;

  text(word, centerX, centerY);

  // LOOP 1: 0 to 9
  for (let i = 0; i < 10; i++) {
    let x = i * spacing;
    let y = centerY + 50;

    text(i, x, y);
  }

  // LOOP 2: 15 down to 1
  for (let i = 15; i > 0; i--) {
    let x = centerX + 100;
    let y = i * spacing;

    text(i, x, y);
  }
}
