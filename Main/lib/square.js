class Square {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"></rect>`;
    }
}

module.exports = Square;