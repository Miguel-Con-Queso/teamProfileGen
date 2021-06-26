const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        name: 'role',
        message: "What is this employee's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('Please select a role');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: "What is this employee's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please provide an employee name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this employee's ID number?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an ID number");
                return false;
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