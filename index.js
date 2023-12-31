const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        message: 'What is the usage your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who created this project',
        name: 'credit'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: [ 'MIT', 'ISC', 'None']
    },
];

function writeToFile(fileName, data) {
    fs.appendFile(fileName, generateMarkdown(data), (error, data) =>
  error ? console.error(error) : console.log("Success!")
);
}

function init() {
    inquirer
  .prompt(
    questions
  )
  .then((data) =>
  writeToFile('./README.md', data));
}

init();
