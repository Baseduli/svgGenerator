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
                type: 'list',
                name: 'textColor',
                message: 'What color would you like for your text?',
                choices: ['White', 'Black', 'Red', 'Yellow', 'Blue']
            },
            {
                type: 'input',
                name: 'text',
                message: 'What text would you like to add to your SVG file?'
            },
        ]);

        const svgGen = new SVGGenerator();
        svgGen.addText(answers.text, answers.textColor);
        svgGen.addShape(answers.shape, answers.shapeColor);
        const svgString = svgGen.generateSVG();

        await fs.writeFile('sample.svg', svgString);
        console.log('The file has been saved!');

    } catch (err) {
        console.error('Error:', err.message);
    }
}

createSVG();