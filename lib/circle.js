// const CLI = require('./cli.js')
const Shapes = require('./shapes.js');

class Circle extends Shapes {
  constructor(color) {
    super(color);
  }
  
  render() {
    return `<circle cx="150" cy="100" r="100" text-anchor="middle" fill="${this.color}" />`;
  }
}

module.exports = Circle;
