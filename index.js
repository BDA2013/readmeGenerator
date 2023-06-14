// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.readFile('README.md', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
