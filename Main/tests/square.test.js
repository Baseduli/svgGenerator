const Square = require('../lib/square.js');

describe('Square class tests', () => {
    test('Does square work', () => {
        const square = new Square('blue');
        expect(square.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue"></rect>');
    });
});

