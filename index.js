// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please enter the license that you will be using',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your README',
    },
    {
        type: 'input',
        name: 'install',
        message: "What are it's installation instructions?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is it's usage information?",
    },
    {
        type: 'input',
        name: 'credits',
        message: "Who are we crediting?",
    },
    {
        type: 'input',
        name: 'test',
        message: "Please provide test instructions",
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            const READMEContent = generateMarkdown(answers);

            fs.writeFile('./final-readme/README.md', READMEContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
            );
        })
};

// Function call to initialize app
init();
