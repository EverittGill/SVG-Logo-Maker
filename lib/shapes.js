// alright, here's the pseudo code. We're trying to make a file that makes other files
// it's going to need inquirer, install inquirer
// it's going to need Jest, install jest
// it's going to need test files. install those later
// needs a class for Shapes that will have kids for the other shapes through inheritance
// needs to have text, shape, and color
// needs a class for triangle
// needs a class for circle
// needs a class for square
// circle class needs a render() method that returns a string for the corresponding SVG file with the given shape color
// square class needs a render() method that returns a string for the corresponding SVG file with the given shape color
// triangle class needs a render() method that returns a string for the corresponding SVG file with the given shape color


class Shapes {
    constructor(color) {
      this.color = color;
    }
    render() {
        throw new Error("Not Implemented Error");
    }
}


module.exports = Shapes;