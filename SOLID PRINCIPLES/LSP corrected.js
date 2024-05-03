function getAreaRectangle(width, height) {
  return width * height;
}

function getAreaSquare(side) {
  return side * side;
}

function printArea(areaCalculator, shape) {
  console.log("Area:", areaCalculator(shape)); // Now accepts the shape directly
}

function areaOfRectangle(shape) {
  return getAreaRectangle(shape.width, shape.height);
}

function areaOfSquare(shape) {
  return getAreaSquare(shape.side);
}

const rectangle = { width: 5, height: 4 };
const square = { side: 5 };

printArea(areaOfRectangle, rectangle); // Output: Area: 20
printArea(areaOfSquare, square); // Output: Area: 25
