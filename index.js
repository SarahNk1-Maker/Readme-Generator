// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generate-markdown');

// Function to prompt the user for project information
function promptUser() {
  return inquirer.prompt([
    // Ask for project title, description, etc.
    // Define your questions based on the user story
  ]);
}

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md successfully generated!');
    }
  });
}

// Initialize the application
async function init() {
  try {
    const userData = await promptUser();
    const markdownContent = generateMarkdown(userData);
    writeToFile('README.md', markdownContent);
  } catch (error) {
    console.error(error);
  }
}

// Start the application
init();
