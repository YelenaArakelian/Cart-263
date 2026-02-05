window.onload = setup;

function setup(){

  window.addEventListener("dragstart", function(event){
    event.dataTransfer.clearData();
    event.dataTransfer.setData("objDraggedID", event.target.id);
  });

  window.addEventListener("dragover", function(event){
    event.preventDefault();
  });

  window.addEventListener("drop", function(event){
    event.preventDefault();

    if(event.target.id === "dropTarget"){
      let theObj = event.dataTransfer.getData("objDraggedID");
      event.target.appendChild(document.getElementById(theObj));
    }
  });

}
