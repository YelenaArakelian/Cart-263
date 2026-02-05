window.onload = setup;

function setup(){

  let allSections = document.querySelectorAll(".mouseclick-active-section");

  for(let element of allSections){

    element.addEventListener("click", function(){

      if(this.getAttribute("custom-bool") === "inactive"){

        this.setAttribute("custom-bool","active");

        let class_to_add = `${this.id}-section-active`;
        this.classList.add(class_to_add);

        let class_to_add_p = `${this.id}-section-p-active`;
        document.querySelector(`#${this.id} p`).classList.add(class_to_add_p);

      } else {

        this.setAttribute("custom-bool","inactive");

        let class_to_remove = `${this.id}-section-active`;
        this.classList.remove(class_to_remove);

        let class_to_remove_p = `${this.id}-section-p-active`;
        document.querySelector(`#${this.id} p`).classList.remove(class_to_remove_p);
      }

    });
  }

  document.querySelector("#bubbleButton").addEventListener("click", function(){

    let bubble = document.createElement("div");
    bubble.classList.add("bubble");

    bubble.style.left = `${Math.random()*(window.innerWidth-200)}px`;
    bubble.style.top = `${Math.random()*(window.innerHeight-200)}px`;

    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);

    bubble.style.background = `rgb(${r},${g},${b})`;

    document.getElementById("top-layer").appendChild(bubble);

  });

}
