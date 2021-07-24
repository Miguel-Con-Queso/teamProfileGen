const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./utils/generate-site.js');
const pageTemplate = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const { listenerAdded } = require('emittery');
const db = require("./db")

const teamArr = [];
function createTeam(){
    inquirer.prompt([
        {
        type: "list",
        name: "employeeChoice",
        message: "What tyoe of employees would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ]
        }
    ]).then(userChoice => {
        switch(userChoice.employeeChoice){
            case "Engineer":
            addEngineer();
            break;
            default:
            buildTeamList()

        }
    })
}


const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is this employee's name?",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                "Please provide an employee name";
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this employee's ID number?",
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
            if (!roleInput) {
                console.log("Please select a role for this employee");
            }
        }
    },
];

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
            },
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
    
    inquirer
    .prompt(questions)
    .then(function (response) {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let role = response.role;
        let officeNumber;
        let github;
        let school;

        if(role === 'Manager') {
            runPromptMan();
        }

        const runPromptMan = response => {
            inquirer
            .prompt(promptMan)
            .then(function (response) {
                officeNumber = response.officeNumber;
                let employee = new Manager(name, id, email, officeNumber);
                teamArr.push(employee);
                addEmployee(teamArr);
            })
        }

        if(role === 'Engineer') {
            runPromptEng();
        }

        const runPromptEng = response => {
            inquirer
            .prompt(promptEng)
            .then(function (response) {
                github = response.github;
                let employee = new Manager(name, id, email, github);
                teamArr.push(employee);
                addEmployee(teamArr);
            })
        }
        
        if(role === 'Intern') {
            runPromptInt();
        };

        const runPromptInt = response => {
            inquirer
            .prompt(promptInt)
            .then(function (response) {
                school = response.school;
                let employee = new Intern(name, id, email, school);
                teamArr.push(employee);
                addEmployee(teamArr);
            })
        }

        if(response.confirmAddEmployee) {
            inquirer
            .prompt(questions)
        }
    })
};

init();

module.exports = {response, employeeData}