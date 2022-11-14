// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
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
            "Apache 2.0",
            "Boost Software 1.0",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "MIT",
            "Mozilla Public 2.0",
            "The Unlicense",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
