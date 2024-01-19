// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?',
    'Enter a description for your README',
    "What are it's installation instructions?",
    "What is it's usage information?",
    "What are the contribution guidelines?",
    "Please provide test instructions"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .createPromptModule([
            type
        ])
    writeToFile();
}

// Function call to initialize app
init();
