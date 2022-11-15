// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let licenseBadge = "";
if (license != "None") {
  licenseBadge = `![License](https://img.shields.io/badge/license-${license}-green)`;
}
return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache2.0") {
    return "[License: Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)";
  } if (license === "Boost Software1.0") {
    return "[License: Boost Software 1.0](https://choosealicense.com/licenses/bsl-1.0/)";
  } if (license === "GNUAGPLv3") {
    return "[License: GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)";
  } if (license === "GNUGPLv3") {
    return "[License: GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)"
  } if (license === "GNULGPLv3") {
    return "[License: GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)" 
  } if (license === "MIT") {
    return "[License: MIT](https://choosealicense.com/licenses/mit/)"
  } if (license === "MozillaPublic2.0") {
    return "[License: Mozilla Public 2.0](https://choosealicense.com/licenses/mpl-2.0/)"
  } if (license === "TheUnlicense") {
    return "[License: The Unlicense](https://choosealicense.com/licenses/unlicense/)"
  } if (license === "None") {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  } else {
    return `## License\nThis project is covered under the ${license} license. Please refer to this link to read the license, permissions, conditions and limitations.`
  }
}

// TODO: Create a function to generate markdown for README
// Table of contents - added to generateMarkdown
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

 ## Description
  ${data.description}

## Table Of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}


${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
  ${data.contributing}

## Tests
  ${data.tests}

## Questions
  Please reach me by GitHub or Email below with any additional questions about this project:\n
  GitHub: https://github.com/${data.github}\n
  Email:  ${data.email}\n

`;
}

module.exports = generateMarkdown;
