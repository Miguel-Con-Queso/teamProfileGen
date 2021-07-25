const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./utils/generate-site.js');
const pageTemplate = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamArr = [];

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                } else {
                    return "Please provide an engineer name";
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this engineer's ID number?",
            validate: answer => {
                if (answer !== null) {
                    return true;
                } else {
                    return "Please enter an ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this engineer's email address?",
            validate: emailInput => {
                if (emailInput !== "") {
                    return true;
                } else {
                    return "Please submit an email address";
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's github username?",
            validate: githubInput => {
                if (githubInput !== "") {
                    return true;
                } else {
                    return "Do you really not know your employee's well enough to answer this?";
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ]).then(answer => {
            let engineer = new Engineer(name, id, email, github);
            teamArr.push(engineer);
            addEmployee(teamArr);
    }).then(answer => {
        if (answer.confirmAddEmployee == true) {
            createTeam();
        }
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                } else {
                    "Please provide an intern name";
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this intern's ID number?",
            validate: answer => {
                if (answer !== null) {
                    return true;
                } else {
                    return "Please enter an ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this intern's email address?",
            validate: emailInput => {
                if (emailInput !== "") {
                    return true;
                } else {
                    return "Please submit an email address";
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is this intern's school name?",
            validate: schoolInput => {
                if (schoolInput !== "") {
                    return true;
                } else {
                    return "Do you really not know your employee's well enough to answer this?";
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ]).then(answer => {
        let intern = new Intern(name, id, email, school);
        teamArr.push(intern);
        addEmployee(teamArr);
    }).then(answer => {
        if (answer.confirmAddEmployee == true) {
            createTeam();
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                } else {
                    "Please provide an manager name";
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this manager's ID number?",
            validate: answer => {
                if (answer !== null) {
                    return true;
                } else {
                    return "Please enter an ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this manager's email address?",
            validate: emailInput => {
                if (emailInput !== "") {
                    return true;
                } else {
                    return "Please submit an email address";
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
                    return "Please add an office Number";
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ]).then(answer => {
        let manager = new Manager(name, id, email, officeNumber);
        teamArr.push(manager);
        addEmployee(teamArr);
}).then(answer => {
        if (answer.confirmAddEmployee == true) {
            createTeam();
        }
    })
}

function createTeam(){
    inquirer.prompt([
        {
        type: "list",
        name: "role",
        message: "What type of employee would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ]
        }
    ]).then(answer => {
        switch(answer.role){
            case "Engineer":
                addEngineer();
                break;
                default:
                    buildTeamList()
        }
    }).then(answer => {
        switch(answer.role){
            case "Intern":
                addIntern();
                break;
                default:
                    buildTeamList()
        }
    }).then(answer => {
        switch(answer.role){
            case "Manager":
                addManager();
                break;
                default:
                    buildTeamList()
        }
    })
}

createTeam();

module.exports = answer