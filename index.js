const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./utils/generate-site.js');
const pageTemplate = require('./src/page-template.js');

const promptMan = () => {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
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
        },
        {
            type: 'list',
            name: 'role',
            message: 'Confirm that this info belongs to a manager',
            choices: ['Manager'],
            validate: mRoleInput => {
                if (mRoleInput) {
                    return true;
                } else {
                    console.log("Please confirm this is a manager");
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddManager',
            message: 'Would you like to add another manager?',
            default: false
        }
    ])
    .then(managerData => {
        if (managerData.confirmAddManager) {
            return promptMan(managerData);
        } else {
            return managerData;
        }
    });
};

const promptEng = () => {
    console.log(`
    ===============
    Add an Engineer
    ===============
    `);

    inquirer
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
                type: 'list',
                name: 'role',
                message: 'Confirm that this info belongs to an engineer',
                choices: ['Engineer'],
                validate: eRoleInput => {
                    if (eRoleInput) {
                        return true;
                    } else {
                        console.log("Please confirm this is an engineer");
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

const promptInt = () => {
    console.log(`
    =============
    Add an Intern
    =============
    `);

    inquirer
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
                type: 'list',
                name: 'role',
                message: 'Confirm that this info belongs to an inter',
                choices: ['Inter'],
                validate: iRoleInput => {
                    if (iRoleInput) {
                        return true;
                    } else {
                        console.log("Please confirm this is an Inter");
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

function init() {
    console.log(`
    ========================
    Welcome to Team Builder!
    ========================
    `)
        .then(promptMan)
        .then(managerData => {
            console.log(managerData);
        })
        .then(promptEng)
        .then(engineerData => {
            console.log(engineerData);
        })
        .then(promptInt)
        .then(internData => {
            console.log(internData)
            return generateHTML(this.managerData, this.engineerData, internData);
        })
        .then(fileContent => {
            return writeFile(fileContent)
        })
        .catch(err => {
            console.log(err);
        });
};

init();

module.exports = {promptMan, promptEng, promptInt, managerData, engineerData, internData, fileContent}