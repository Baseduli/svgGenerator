const Triangle = require('../lib/triangle.js');

describe('Triangle class tests', () => {
    test('Does Triangle work', () => {
        const triangle = new Triangle('blue');
        expect(triangle.render()).toEqual('<polygon points="100,0 0,100 200,100" fill="blue"></polygon>');
    });
});
