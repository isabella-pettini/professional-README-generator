// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let licenseBadge = "";
if (license != "None") {
  licenseBadge = `[![License](https://img.shields.io/badge/license-${answers.license}-green)]`;
}
return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return "[![License: Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)]";
  } if (license === "Boost Software 1.0") {
    return "[![License: Boost Software 1.0](https://choosealicense.com/licenses/bsl-1.0/)]";
  } if (license === "GNU AGPLv3") {
    return "[![License: GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)]";
  } if (license === "GNU GPLv3") {
    return "[![License: GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)]"
  } if (license === "GNU LGPLv3") {
    return "[![License: GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)]" 
  } if (license === "MIT") {
    return "[![License: MIT](https://choosealicense.com/licenses/mit/)]"
  } if (license === "Mozilla Public 2.0") {
    return "[![License: Mozilla Public 2.0](https://choosealicense.com/licenses/mpl-2.0/)]"
  } if (license === "The Unlicense") {
    return "[![License: The Unlicense](https://choosealicense.com/licenses/unlicense/)]"
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
    return `## Licenses\nThis project is using the ${license} license. Please refer to the link to read the license, permissions, conditions and limitations.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
