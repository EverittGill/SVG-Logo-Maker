const Circle = require('../lib/circle');

describe('Circle', () => {
    it('needs to return the right SVG data', () => {
        const circle = new Circle('blue');
        const expected = '<circle cx="150" cy="100" r="100" text-anchor="middle" fill="blue" />'
        expect(circle.render()).toEqual(expected);
    });
});
