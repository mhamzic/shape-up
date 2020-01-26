// define some global constants
const max = 400;
let canvas = document.getElementById("canvas");

// create generic class shape
class Shape {
  constructor(x, y) {
    this.div = document.createElement("div");
    this.div.classList.add("shape");
    this.div.style.left = `${x}px`;
    this.div.style.top = `${y}px`;
    this.randColor(); //add random color to shape
    this.randLocation(); //add random location to shape
    canvas.appendChild(this.div);
    // event listener on click - show info
    this.div.addEventListener("click", () => {
      this.clearFieldsInfo();
      this.readInfo();
    });
    // event listener on doubleclick - remove shape
    this.div.addEventListener("dblclick", () => {
      this.div.remove();
    });
  }

  //   method for random location
  randLocation() {
    let xLoc = randomize(0, max);
    let yLoc = randomize(0, max);
    this.div.style.left = `${xLoc}px`;
    this.div.style.top = `${yLoc}px`;
  }

  //   method for random color
  randColor() {
    let randomColor = `rgb(${randomize(0, 255)},${randomize(0, 255)},${randomize(
      0,
      255
    )})`;
    this.div.style.backgroundColor = randomColor;
  }
}

// create class rectangle that is based on class shape

class Rectangle extends Shape {
  constructor(x, y, width, height) {
    super();
    this.div.style.width = `${width}px`;
    this.div.style.height = `${height}px`;
    this.div.name = "Rectangle";
    this.div.width = `${width}px`;
    this.div.height = `${height}px`;
  }
  readInfo() {
    let infoWidth = this.div.width;
    let infoHeight = this.div.height;
    let infoName = this.div.name;
    let infoArea = this.area;
    let infoPerimeter = this.perimeter;

    document.getElementById("info-name").innerText = infoName;
    document.getElementById("info-width").innerText = infoWidth;
    document.getElementById("info-height").innerText = infoHeight;
    document.getElementById("info-area").innerText = infoArea;
    document.getElementById("info-perimeter").innerText = infoPerimeter;
  }

  clearFields() {
    document.getElementById("rec-width").value = "";
    document.getElementById("rec-height").value = "";
  }

  clearFieldsInfo() {
    document.getElementById("info-name").innerText = "";
    document.getElementById("info-width").innerText = "";
    document.getElementById("info-height").innerText = "";
    document.getElementById("info-area").innerText = "";
    document.getElementById("info-perimeter").innerText = "";
  }
}

class Square extends Shape {
  constructor(x, y, width, height) {
    super();
    this.div.style.width = `${width}px`;
    this.div.style.height = `${width}px`;
    this.div.name = "Square";
    this.div.width = `${width}px`;
    this.div.height = `${width}px`;
  }
  readInfo() {
    let infoWidth = this.div.width;
    let infoHeight = this.div.height;
    let infoName = this.div.name;
    let infoArea = this.area;
    let infoPerimeter = this.perimeter;

    document.getElementById("info-name").innerText = infoName;
    document.getElementById("info-width").innerText = infoWidth;
    document.getElementById("info-height").innerText = "N/A";
    document.getElementById("info-area").innerText = infoArea;
    document.getElementById("info-perimeter").innerText = infoPerimeter;
  }

  clearFields() {
    document.getElementById("sq-width").value = "";
  }

  clearFieldsInfo() {
    document.getElementById("info-name").innerText = "";
    document.getElementById("info-width").innerText = "";
    document.getElementById("info-area").innerText = "";
    document.getElementById("info-perimeter").innerText = "";
  }
}

document.getElementById(
  "rectangle-form",
  addEventListener("submit", function(e) {
    const width = document.getElementById("rec-width").value;
    const height = document.getElementById("rec-height").value;
    let xLoc = randomize(0, max);
    let yLoc = randomize(0, max);

    let rectangle = new Rectangle(xLoc, yLoc, width, height);
    rectangle.area = width * height;
    rectangle.perimeter = 2 * (width + height);
    console.log(rectangle);
    rectangle.clearFields();
    e.preventDefault();
  })
);

document.getElementById(
  "square-form",
  addEventListener("submit", function(e) {
    const width = document.getElementById("sq-width").value;
    const height = width;
    let xLoc = randomize(0, max);
    let yLoc = randomize(0, max);

    let square = new Square(xLoc, yLoc, width, height);
    square.area = width ** 2;
    square.perimeter = 4 * width;
    console.log(square);

    square.clearFields();
    e.preventDefault();
  })
);

// function for randomize various elements - location, color, etc...
function randomize(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
