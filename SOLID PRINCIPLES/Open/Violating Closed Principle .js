// Violating the Open/Closed Principle

function calculateArea(shape, ...args) {
  switch (shape) {
    case "circle":
      const [radius] = args;
      return Math.PI * Math.pow(radius, 2);
    case "rectangle":
      const [width, height] = args;
      return width * height;

    default:
      throw new Error("Unsupported shape.");
  }
}

const circleArea = calculateArea("circle", 5);
console.log(circleArea); // Outputs: 78.54

const rectangleArea = calculateArea("rectangle", 4, 6);
console.log(rectangleArea); // Outputs: 24
