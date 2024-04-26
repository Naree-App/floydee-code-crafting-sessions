// Adhering to the Open/Closed Principle

// Function to calculate area of a circle
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function calculateRectangleArea(width, height) {
  return width * height;
}

function calculateOvalArea(width, height) {
  return width / height;
}

function calculateArea(shape, ...args) {
  const shapeCalculators = {
    circle: calculateCircleArea,
    rectangle: calculateRectangleArea,
    oval: calculateOvalArea,
  };

  const calculator = shapeCalculators[shape];
  if (!calculator) {
    throw new Error("Unsupported shape.");
  }

  return calculator(...args);
}

const circleArea = calculateArea("circle", 5);
console.log(circleArea); // Outputs: 78.54

const rectangleArea = calculateArea("rectangle", 4, 6);
console.log(rectangleArea); // Outputs: 24

// calculateArea function directly handles different shapes by switching on the shape type.
// If a new shape is added, the calculateArea function must be modified, violating the Open/Closed Principle.
