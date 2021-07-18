const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');
const genSite = require('../utils/generate-site.js');

/* const generateTeam = teamArr => {
    return `
    <section class="my-3" id="team">
    <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
    <div class="flex-row justify-space-between">
    ${teamArr
      .map(({ name, id, email, github }) => {
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3">
          <h3 class="employee-name text-light">${name}</h3>
          <h5 class="employee-id">
            ID#: ${id}
          </h5>
          <h5 class="employee-email text-light">
          ${email}
          </h5>
          <a href="${github}" class="btn"><i class="fab fa-github mr-2"></i>GitHub</a>
        </div>
        `;
        })
        .join('')}

    </div>
    </section>
    `;
}; */

module.exports = generateHTML = (managerData, engineerData, internData) => {
    genSite.teamArrToHTML(managerData, engineerData, internData)
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
        </div>
      </header>
      <main class="container my-5">
        ${teamArr}
      </main>
    </body>
    </html>
    `;
  };