class MarkDown {

  static renderLicBadge(license){
    const badges = {
      MIT: '[![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)',
      APACHE_2: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      GPL_3: '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)',
      BSD_3: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    }
    return badges[license]
  }

  static generateReadme(answers){
    return `
# ${answers.username}

${this.renderLicBadge(answers.license)}

## Description
${answers.description}

## Table of Content
* [Installation](#Installation)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)

## Installation
To install necessary dependencies, run the following command:
${answers.commandInstall}

## Contributing
${answers.contributingInfo}

## Tests
To run tests, run the following command: 
${answers.commandTest}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at ${answers.username}
    `
  }
}

module.exports = MarkDown;