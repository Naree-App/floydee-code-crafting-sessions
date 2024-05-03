function getAreaRectangle(width, height) {
  return width * height;
}

function getAreaSquare(side) {
  return side * side;
}

function printArea(areaCalculator) {
  console.log("Area:", areaCalculator(5, 4)); // Assuming a rectangle
}

printArea(getAreaRectangle); // Output: Area: 20
printArea(getAreaSquare); // Output: Area: 25, but expected 20 (violates LSP)
