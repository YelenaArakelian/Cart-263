"use strict";
const rect = {
    x: random(0, 500),
    y: random(0, 500)
} 

function setup() {
    createCanvas(500,500);
    fill(150, 0, 255);  
    drawRect();
}

function draw() {
       background(200); 

       drawRect(50, 50, 80, 80, 100, 255, 255);
       drawRect(150, 150, 100, 100, 255, 100, 255);
       drawRect(250, 250, 40, 40, 255, 255, 100);
      
}
function drawRect(x,y,w,h,r,g,b) {
    noStroke();
    fill(r, g, b);
    rect(x, y, w, h);
}

function mousePressed() {
  
    if (mouseIsPressed){
        rect.x = random(0, 500);
        rect.y = random(0, 500);
    } else{
        rect.x = rect.x;
        rect.y = rect.y;

    }
    
}

