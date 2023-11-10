class SVGGenerator {
    constructor() {
        this.elements = [];
    }

    addText(text, textColor) {
        const svgText = `<text fill="${textColor}">${text}</text>`;
        this.elements.push(svgText);
    }

    addShape(shape, shapeColor) {
        let svgShape;
        switch (shape) {
            case 'Circle':
                svgShape = `<circle r="50" fill="${shapeColor}"></circle>`;
                break;
            case 'Square':
                svgShape = `<rect width="100" height="100" fill="${shapeColor}"></rect>`;
                break;
            case 'Rectangle':
                svgShape = `<rect width="300" height="200" fill="${shapeColor}"></rect>`;
                break;
            case 'Triangle':
                svgShape = `<polygon points="100,0 0,100 200,100" fill="${shapeColor}"></polygon>`;
                break;

            default:
                svgShape = ''; // Default case if shape is not recognized
        }
        this.elements.push(svgShape);
    }

    generateSVG() {
        return `<svg>${this.elements.join('')}</svg>`;
    }
}

module.exports = SVGGenerator;
