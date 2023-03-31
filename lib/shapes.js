// just the parent class

class Shapes {
    constructor(color) {
      this.color = color;
    }
    render() {
        throw new Error("Not Implemented Error");
    }
}


module.exports = Shapes;