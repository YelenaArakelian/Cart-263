/**
 * TASK 1: Yéléna and Scarlett
 */

"use strict";

const word = "test";
const text_size = 28;
const text_color = 255;
const offset_spacing = 35; 

function setup() {
  createCanvas(600, 600);
  background(0);

  fill(text_color);
  textSize(text_size);
  
  textAlign(CENTER, CENTER);
  text(word, width / 2, height / 2);

  const startX = 50;
  const startY = 30;

  // change text alignment for loops
  textAlign(LEFT, TOP);

  // Loop 1 Horizontal (0 to 9)
  for (let i = 0; i <= 9; i++) {
    // Use 'i' to offset the x position
    let x = startX + (i * offset_spacing);
    let y = startY; 
    
    text(i, x, y);
  }

  // Loop2 Vertical (1 to 15) 
  for (let i = 15; i >= 1; i--) {
    let x = startX;
    
    // Offset the y position
    let y = startY + (i * offset_spacing); 
    
    text(i, x, y);
  }
}