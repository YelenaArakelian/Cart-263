class DrawingBoard {
  constructor(canvas, context, id) {
    this.canvas = canvas;
    this.context = context;
    this.id = id;

    this.listOfObjects = [];

    this.mouseX = 0;
    this.mouseY = 0;

    let self = this;

    this.canvas.addEventListener("mousemove", function (event) {
      let rect = self.canvas.getBoundingClientRect();
      self.mouseX = event.clientX - rect.left;
      self.mouseY = event.clientY - rect.top;

      // Task 4: move rectangle on video board
      if (self.id === "partD" && self.listOfObjects.length > 0) {
        self.listOfObjects[0].updatePositionRect(self.mouseX, self.mouseY);
      }
    });

    this.canvas.addEventListener("click", function () {
      // Task 4: change rectangle color on click
      if (self.id === "partD" && self.listOfObjects.length > 0) {
        let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];

        self.listOfObjects[0].changeColor(randomColor);
      }
    });
  }

  addObj(obj) {
    this.listOfObjects.push(obj);
  }

  display() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.listOfObjects.length; i++) {
      this.listOfObjects[i].display();
    }
  }

  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.listOfObjects.length; i++) {
      if (typeof this.listOfObjects[i].update === "function") {
        this.listOfObjects[i].update();
      }

      if (typeof this.listOfObjects[i].display === "function") {
        this.listOfObjects[i].display();
      }
    }
  }

  run(videoEl) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.listOfObjects.length; i++) {
      if (typeof this.listOfObjects[i].update === "function") {
        this.listOfObjects[i].update(videoEl);
      }

      if (typeof this.listOfObjects[i].display === "function") {
        this.listOfObjects[i].display();
      }
    }
  }
}