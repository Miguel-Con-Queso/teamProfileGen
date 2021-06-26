const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the Manager's name?",
        validate: mNameInput => {
            if (mNameInput) {
                return true;
            } else {
                console.log("Please provide an employee name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the manager's ID number?",
        validate: mIDInput => {
            if (mIDInput) {
                return true;
            } else {
                console.log("Please enter an ID number");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email address?",
        validate: mEmailInput => {
            if (mEmailInput) {
                return true;
            } else {
                console.log("Please submit an email address");
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please add an office Number");
            }
        }
    }
]

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
    })
}

init();