// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];


inquirer
  .prompt([
    // {
    //   type: 'EXAMPLE1',
    //   name: 'name',
    //   message: 'What is your GitHub Username?',
    // },
    // {
    //   type: 'EXAMPLE2',
    //   name: 'location',
    //   message: 'Where are you from?',
    // },
    {
      question1: 'What is your favorite hobby?',
      question2: 'What is your email address?',
      question3: "What is your project's name?"
      question4: 'Please write a short description of your project'
      question5: 'What kind of license should your project have?'
      question6: 'What command should be run to install dependencies?'
      question7: 'What command should be run to run tests?'
      question8: 'What does the user need to know about using the repo?'
      question9: 'What does the user need to know about contributing to the repo?'
    },
  ])
  .then((answers) => {
    const ReadmeContent = generateHTML(answers);

    fs.writeFile('README.md', ReadmeContent, (err) =>
      err ? console.log(err) : console.log('Generating README...')
    );
  });




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


const writeToFile2 = ({ WRITE ARGUMENTS HERE }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;




// TODO: Create a function to initialize app
function init() {}

// What should be written in here????



// Function call to initialize app
init();