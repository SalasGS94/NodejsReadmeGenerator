// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const MarkDown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
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
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
    },
    {
      type: 'input',
      name: 'commandInstall',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'command test',
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


// inquirer
//   .prompt([
//     // {
//     //   type: 'EXAMPLE1',
//     //   name: 'name',
//     //   message: 'What is your GitHub Username?',
//     // },
//     // {
//     //   type: 'EXAMPLE2',
//     //   name: 'location',
//     //   message: 'Where are you from?',
//     // },
//   ])
//   .then((answers) => {
//     const ReadmeContent = generateHTML(answers);

//     fs.writeFile('README.md', ReadmeContent, (err) =>
//       err ? console.log(err) : console.log('Generating README...')
//     );
//   });




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// const writeToFile2 = ({ }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <header class="p-5 mb-4 header bg-light">
//     <div class="container">
//       <h1 class="display-4">Hi! My name is ${name}</h1>
//       <p class="lead">I am from ${location}.</p>
//       <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${github}</li>
//         <li class="list-group-item">LinkedIn: ${linkedin}</li>
//       </ul>
//     </div>
//   </header>
// </body>
// </html>`;




// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
    .then((answers) => {
      const mark = MarkDown.generateReadme(answers)
      fs.writeFile('README.md', mark, function(err) {
      err ? console.log(err) : console.log('Generating README...')
    })
    // .catch((error) => {
    //   console.log(error)
    // })
}
)}

// What should be written in here????



// Function call to initialize app
init();