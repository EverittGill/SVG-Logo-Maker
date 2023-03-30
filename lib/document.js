// document.js

const Circle = require('./circle.js');
const Square = require('./square');
const Triangle = require('./triangle.js')

function createDocument(text, textColor, shape, color) {
    // ... code to generate SVG document ...
    
    // return `'<?xml version="1.0" encoding="UTF-8" ?><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect x="10" y="10" width="300" height="200" fill="' ${color} '" shape="' ${shape}  '" /></svg>'`;

    const circle = new Circle;
    const square = new Square;
    const triangle = new Triangle;


  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <${square} fill=${color} />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill= ${textColor}>${text}</text>
</svg>`

    // return '<?xml version="1.0" encoding="UTF-8" ?><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect x="10" y="10" width="300" height="200" fill="' + color + '" shape="' + shape + '" /></svg>';
}
  
  
  module.exports = { createDocument };

//   will need a new instance of each