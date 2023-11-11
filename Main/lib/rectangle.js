class Rectangle {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<rect width="300" height="200" fill="${this.color}"></rect>`;
    }
}

module.exports = Rectangle;