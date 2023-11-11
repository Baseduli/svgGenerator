class Triangle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="100,0 0,100 200,100" fill="${this.color}"></polygon>`;
    }
}

module.exports = Triangle;