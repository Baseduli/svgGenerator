const Circle = require('../lib/circle.js');

describe('Circle class tests', () => {
    test('Does circle work', () => {
        const circle = new Circle('blue');
        expect(circle.render()).toEqual('<ellipse cx="150" cy="100" rx="150" ry="100" fill="blue"></ellipse>');
    });
});
