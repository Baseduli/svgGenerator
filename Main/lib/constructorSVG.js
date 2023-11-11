const Triangle = require('./triangle');
const Square = require('./square');
const Rectangle = require('./rectangle');
const Circle = require('./circle');

class SVGGenerator {
    constructor() {
        this.elements = [];
    }

    addText(text, textColor) {
        const svgText = `<text fill="${textColor}">${text}</text>`;
        this.elements.push(svgText);
    }

    addShape(shapeType, shapeColor) {
        let shape;
        switch (shapeType) {
            case 'Circle':
                shape = new Circle(shapeColor);
                break;
            case 'Square':
                shape = new Square(shapeColor);
                break;
            case 'Rectangle':
                shape = new Rectangle(shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle(shapeColor);
                break;
            default:
                shape = null; // Default case if shape is not recognized
        }
        if (shape) {
            this.elements.push(shape.render());
        }
    }

    generateSVG() {
        return `<svg version="1.1" xmlns="https://www.w3.org/2000/svg" width="300" height="200">${this.elements.join('')}</svg>`;
    }
}

module.exports = SVGGenerator;
