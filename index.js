const inquirer = require('inquirer');
const MarkDown = require('./utils/generateMarkdown')
const fs = require('fs');

const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE_2', 'GPL_3', 'BSD_3'],
    },
    {
      type: 'input',
      name: 'commandInstall',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'commandTest',
      message: 'What command should be run to run tests?',
    },
    {
      type: 'input',
      name: 'repo info',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contributingInfo',
      message: 'What does the user need to know about contributing to the repo?',
    },
];

function init() {
  return inquirer.prompt(questions)
    .then((answers) => {
      const mark = MarkDown.generateReadme(answers)
      fs.writeFile('README.md', mark, function(err) {
      err ? console.log(err) : console.log('Generating README...')
    })
  }
)}

init();