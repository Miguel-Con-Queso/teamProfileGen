const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./utils/generate-site.js');
const pageTemplate = require('./src/page-template.js');

const questions = [
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
        validate: IDInput => {
            if (IDInput) {
                return true;
            } else {
                console.log("Please enter an ID number");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this employee's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please submit an email address");
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'What role does this employee perform?',
        choices: ['Manager', 'Engineer', 'Inter'],
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log("Please select an employee role");
            }
        }
    }
]

const promptMan = [
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
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
    }
];

const promptEng = [
    {
        type: 'input',
        name: 'github',
        message: "What is this engineer's github username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("do you really not know your employee's well enough to answer this?");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
    }
];

const promptInt = [
    {
        type: 'input',
        name: 'school',
        message: "What is this intern's school name?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Do you really not know your employee's well enough to answer this?");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
    }
];

function init() {
    console.log(`
    ========================
    Welcome to Team Builder!
    ========================
    `)

    inquirer
        .prompt(questions)
        .then(answer => {
            if (answer.role === 'Manager') {
                inquirer
                    .prompt(promptMan)
                    .then(answer => {
                        if (confirmAddEmployee) {
                            inquirer
                                .prompt(questions)
                        }
                    })
            } else if (answer.role === 'Engineer') {
                inquirer
                    .prompt(promptEng)
                    .then(answer => {
                        if (confirmAddEmployee) {
                            inquirer
                                .prompt(questions)
                        }
                    })
            } else if (answer.role === 'Intern') {
                inquirer
                    .prompt(promptInt)
                    .then(answer => {
                        if (confirmAddEmployee) {
                            inquirer
                                .prompt(questions)
                        }
                    })
            }
        })
    createHTML(answers);
};

function createHTML(answers) {
    generateHTML(answers)
        .then(fileContent => {
            return writeFile(fileContent)
        })
        .catch(err => {
            console.log(err);
        });
};

init();

module.exports = {questions, promptMan, promptEng, promptInt, answers, fileContent}