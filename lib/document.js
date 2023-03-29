// document.js

function createDocument(text, textColor, shape, color) {
    // ... code to generate SVG document ...
    return '<?xml version="1.0" encoding="UTF-8" ?><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect x="10" y="10" width="300" height="200" fill="' + color + '" shape="' + shape + '" /></svg>';
}
  
  
  module.exports = {
    createDocument: createDocument,
  };