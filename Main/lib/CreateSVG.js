const inquirer = require('inquirer');
const fs = require('fs').promises;
const SVGGenerator = require('./constructorSVG.js');

async function createSVG() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like for your SVG file?',
                choices: ['Circle', 'Square', 'Rectangle', 'Triangle']
            },
            {
                type: 'list',
                name: 'shapeColor',
                message: 'What color would you like for your shape?',
                choices: ['Red', 'Blue', 'Green', 'Yellow']
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like for your text?',
                validate: function (input) {
                    const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                    const validColors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'orange', 'purple', 'pink'];
                    if (hexPattern.test(input) || validColors.includes(input)) {
                        return true;
                    }
                    return 'Please enter a valid color or hex code.';
                },
            },
            {
                type: 'input',
                name: 'text',
                message: 'What text would you like to add to your SVG file?',
                validate: function (input) {
                    if (input.length > 3) {
                        return 'The input should not exceed 3 characters.'
                    }
                    return true;
                }
            },
        ]);

        const svgGen = new SVGGenerator();
        svgGen.addText(answers.text, answers.textColor);
        svgGen.addShape(answers.shape, answers.shapeColor);
        const svgString = svgGen.generateSVG();

        await fs.writeFile('generated logo.svg', svgString);
        console.log('The file has been saved!');

    } catch (err) {
        console.error('Error:', err.message);
    }
}


module.exports = createSVG;