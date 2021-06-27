const { validate } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');

const promptMan = () => {
    return inquirer.prompt([
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
    ]);
};

const promptEng = engineerData => {
    console.log(`
    ===============
    Add an Engineer
    ===============
    `);

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
                        console.log("do you really not know your employee's well enough to answer this?");
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
            },
            {
                type: 'confirm',
                name: 'confirmAddEngineer',
                message: 'Would you like to add another engineer?',
                default: false
            },
        ])
        .then(engineerData => {
            if (engineerData.confirmAddEngineer) {
                return promptEng(engineerData);
            } else {
                return engineerData;
            }
        });
};

const promptInt = internData => {
    console.log(`
    =============
    Add an Intern
    =============
    `);

    return inquirer
        .prompt([
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
            },
            {
                type: 'confirm',
                name: 'confirmAddIntern',
                message: 'Would you like to add another intern?',
                default: false
            }
        ])
        .then(internData => {
            if (internData.confirmAddIntern) {
                return promptInt(internData);
            } else {
                return internData
            }
        });
};

promptMan()
    .then(promptEng)
    .then(engineerData => {
        console.log(engineerData);
    })
    .then(promptInt)
    .then(internData => {
        console.log(internData);
    })
    .catch(err => {
        console.log(err);
    });