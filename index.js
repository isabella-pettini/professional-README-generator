// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const { writeFile } = require('fs').promises;
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const userQuestions = [
    // Title
    {
        type: "input",
        name: "title",
        message: "Please enter your project Title.",
    },
    // Description
    {
        type: "input",
        name: "description",
        message: "Please provide a description for your project.",
    },
    // Installation
    {
        type: "input",
        name: "installation",
        message: "Please provide the steps to install your project.",
    },
    // Usage
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use of your project.",
    },
    // License 
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: [
            "Apache2.0",
            "Boost Software1.0",
            "GNUAGPLv3",
            "GNUGPLv3",
            "GNULGPLv3",
            "MIT",
            "MozillaPublic2.0",
            "TheUnlicense",
            "None",
        ]
    },
    // Contributing
    {
        type: "input",
        name: "contributing",
        message: "Please include guidelines on how users can contribute to your project.",
    },
    // Tests
    {
        type: "input",
        name: "tests",
        message: "Please provide examples on how to run tests for you project.",
    },
    // Questions - GitHub Username
    {
        type: "input",
        name: "github",
        Message: "Please enter your GitHub username where users can contact you with questions."
    },
    // Questions - Email Address
    {
        type: "input",
        name: "email",
        message: "Please enter your email where users can contact you with questions."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Your README file has been successfully created!')
    );
}

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(userQuestions)
    .then (function(data){
        writeToFile("README.md", generateMarkdown(data))

    })
}

// Function call to initialize app
init();


// const init = () => {
//     userQuestions()
//     .then((data) => writeFile('README.md', generateMarkdown(data)))
//     .then(() => console.log('Successfully created your README file.'))
//     .catch((err) => console.log(err));
// };