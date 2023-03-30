// document.js


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
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
}

module.exports = { createDocument };







// const Circle = require('./circle.js');
// const Square = require('./square');
// const Triangle = require('./triangle.js')

// function createDocument(text, textColor, shape, color) {
    // ... code to generate SVG document ...
    
    // return `'<?xml version="1.0" encoding="UTF-8" ?><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect x="10" y="10" width="300" height="200" fill="' ${color} '" shape="' ${shape}  '" /></svg>'`;

//     const circle = new Circle;
//     const square = new Square;
//     const triangle = new Triangle;


//   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <${square} fill=${color} />
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill= ${textColor}>${text}</text>
// </svg>`

    // return '<?xml version="1.0" encoding="UTF-8" ?><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect x="10" y="10" width="300" height="200" fill="' + color + '" shape="' + shape + '" /></svg>';
// }
  
  
//   module.exports = { createDocument };

//   will need a new instance of each