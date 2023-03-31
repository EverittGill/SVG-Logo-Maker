const Shapes = require('./shapes.js')



class Triangle extends Shapes{
    constructor(color) {
        super(color);
      }
    render() {
        return `<polygon points="150,50 300,200 0,200" fill="${this.color}" />`;

    }
}

module.exports = Triangle;