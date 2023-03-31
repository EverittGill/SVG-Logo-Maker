// document.js creates the file


const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function createDocument(text, textColor, shape, color) {
  let shapeElement;

  switch (shape) {
    case 'Circle':
      shapeElement = new Circle(color).render();
      break;
    case 'Square':
      shapeElement = new Square(color).render();
      break;
    case 'Triangle':
      shapeElement = new Triangle(color).render();
      break;
    default:
      throw new Error(`something went wrong, try again`);
  }

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeElement}
    <text x="150" y="150" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
}

module.exports = { createDocument };






