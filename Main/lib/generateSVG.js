const SVG = require('./SVG.js');

class UserInput {

}

class SVGGenerator {
    consturctor() {
        this.canvas = SVG(), size(300, 200);
        this.group = this.canvas.group();
    }

}

class SVGText {
    constructor() {
        this.text = this.group.text('Sample text');

    }
}

class SVGShape {
    constructor(shape, shapeColor) {

    }
}