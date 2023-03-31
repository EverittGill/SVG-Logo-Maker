const Square = require('../lib/square');

describe('Square', () => {
    it('needs to return the right SVG data', () => {
        const square = new Square('blue');
        const expected = '<rect x="10" y="10" width="300" height="300" fill="blue"/>'
        expect(square.render()).toEqual(expected);
    });
});
