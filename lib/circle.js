// const CLI = require('./cli.js')
const Shapes = require('./shapes.js');

class Circle extends Shapes {
  constructor(color) {
    super(color);
  }
  
  render() {
    return `<circle cx="150" cy="150" r="300" fill="${this.color}" />`;
  }
}

module.exports = Circle;
