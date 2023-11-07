const inquirer = require('inquirer');
const fs = require('fs').promises;

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

        const SVG = require('./SVG.js');
        const svg = new SVG(answers.shape, answers.shapeColor, answers.textColor, answers.text);
        const svgString = svg.generateSVG();

        await fs.writeFile('sample.svg', svgString);  // Await the writeFile promise
        console.log('The file has been saved!');

    } catch (err) {
        console.error('Error:', err.message);
    }
}

createSVG();
