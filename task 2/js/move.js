window.onload = function(){

  let drawBox = document.querySelector("#draw-box-a");

  drawBox.addEventListener("mousemove", function(e){

    let rect = this.getBoundingClientRect();
    let offsetX = e.clientX - rect.x;
    let offsetY = e.clientY - rect.y;

    let pointDiv = document.createElement("div");
    pointDiv.classList.add("point");
    pointDiv.style.left = offsetX + "px";
    pointDiv.style.top = offsetY + "px";

    this.appendChild(pointDiv);

  });

}
