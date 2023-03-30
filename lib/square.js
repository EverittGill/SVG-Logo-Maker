const Shapes = require('./shapes.js')



class Square extends Shapes{
    constructor(color) {
        super(color);

      }
    render() {
        // return `<circle cx="150" cy="150" r="300" fill=${color}`
        return `<rect x="10" y="10" width="30" height="30" fill=${color}/>
        `
    }
}

module.exports = Square;










// class square extends shapes {
//     render(){
        
//     }
// }