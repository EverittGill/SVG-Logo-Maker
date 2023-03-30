// the following example test should pass

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');



const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it('needs to return the right SVG data', () => {
        const triangle = new Triangle('blue');
        const expected = '<polygon points="150,50 300,200 0,200" fill="blue" />'
        expect(triangle.render()).toEqual(expected);
    });
});

