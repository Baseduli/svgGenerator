class Circle {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<ellipse cx="150" cy="100" rx="150" ry="100" fill="${this.color}"></ellipse>`;
    }
}

module.exports = Circle;