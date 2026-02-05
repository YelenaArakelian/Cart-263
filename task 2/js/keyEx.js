let speedX = 5;

window.addEventListener("keydown", function(event){

  let boxA = document.getElementById("boxA");
  let boxB = document.getElementById("boxB");

  document.getElementById("textContainer").textContent += event.key + " ";

  if(event.key === "ArrowRight"){
    boxA.style.left = parseInt(boxA.style.left) + speedX + "px";
  }
  else if(event.key === "ArrowLeft"){
    boxA.style.left = parseInt(boxA.style.left) - speedX + "px";
  }
  else if(event.code === "Space"){
    let bool = boxB.getAttribute("custom-bool");

    if(bool === "off"){
      boxB.style.background = "orange";
      boxB.setAttribute("custom-bool","on");
    } else {
      boxB.style.background = "rgb(112,184,226)";
      boxB.setAttribute("custom-bool","off");
    }
  }
  else if(event.key === "Shift"){
    boxA.style.background = "pink";
  }
});

window.addEventListener("keyup", function(event){
  if(event.key === "Shift"){
    document.getElementById("boxA").style.background = "rgb(112,184,226)";
  }
});
