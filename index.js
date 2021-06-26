const { validate } = require('@babel/types');
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

const promptEnIn = workerData => {
    console.log(`
    ===============
    Add an employee
    ===============
    `);

    if(!workerData.emps) {
        workerData.emps = [];
    }
    return inquirer
        .prompt([
            {
                type: 'choices',
                name: 'EnOrIn',
                message: "Would you like to add an Engineer or an Intern?",
                choices: ['Engineer', 'Intern']
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
                        return false;
                    }
                }
            }
        ]).then(answers => {
            if (EnOrIn.answers === 'Engineer') {
                return inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is this engineer's github username?",
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                console.log("Please just answer the question");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'confirm',
                        name: 'confirmAddMate',
                        message: 'Would you like to add another teammate?',
                        default: false
                    }
                ])
            } else if (EnOrIn.answers === 'Intern') {
                return inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: "What is the name of this Intern's school?",
                        validate: schoolInput => {
                            if (schoolInput) {
                                return true;
                            } else {
                                console.log("What is wrong with you? Answer.the.question.");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'confirm',
                        name: 'confirmAddMate',
                        message: 'Would you like to add another teammate?',
                        default: false
                    }
                ])
            } else {
                return false;
            }
        }).then(workerData => {
            workerData.emps.push(teamData);
            if (teamData.confirmAddMate) {
                return promptEnIn(workerData);
            } else {
                return workerData;
            }
        });
};

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
    })
    .then(() => {
        inquirer.prompt(promptEnIn)
    })
    .then((answers) => {
        console.log(answers);
    })
    .catch(err => {
        console.log(err);
    });
}

init();