// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project called?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the instructions for installing your project',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What are the usage information?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: [ 'MIT', 'ISC', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (error, data) =>
  error ? console.error(error) : console.log(data)
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(
    questions
  )
}

// Function call to initialize app
init();
