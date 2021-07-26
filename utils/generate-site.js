const fs = require('fs');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const pageTemplate = require('../src/page-template');
const index = require('../index');

// module.exports = () => {
//     const teamArrToHTML = teamArr => {
//         const cardArr = teamArr.map((c) => {
//             switch (c.getRole()) {
//                 case 'Manager':
//                     return `
//                     <div class='employee-card'>
//                     <div class='manager-card'>
//                         <p class='card-title'> Manager </p>
//                         <p>Name: ${c.getName()}</p>
//                         <p>Id: ${c.getId()}</p>
//                         <p>Email: ${c.getEmail()}</p>
//                         <p class='p-final'>OfficeNumber: ${c.getOffice()}</p>
//                     </div>
//                     </div> 
//                     `;

//                 case 'Engineer':
//                     return `
//                     <div class='employee-card'>
//                     <div class='engineer-card'>
//                         <p class='card-title'> engineer </p>
//                         <p>Name: ${c.getName()}</p>
//                         <p>Id: ${c.getId()}</p>
//                         <p>Email: ${c.getEmail()}</p>
//                         <p class='p-final'>Github: ${c.getGithub()}</p>
//                     </div>
//                     </div> 
//                     `;

//                 case 'Intern':
//                     return `
//                     <div class='employee-card'>
//                     <div class='intern-card'>
//                         <p class='card-title'> Inter </p>
//                         <p>Name: ${c.getName()}</p>
//                         <p>Id: ${c.getId()}</p>
//                         <p>Email: ${c.getEmail()}</p>
//                         <p class='p-final'>School: ${c.getSchool()}</p>
//                     </div>
//                     </div> 
//                     `;
//                 default:
//                     return cardArr => {
//                         console.log(cardArr);
//                         return generateHTML(cardArr);
//                     }
//             }
//         });
//     }
// }
// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('../dist/results.html', fileContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }

//             resolve({
//                 ok: true,
//                 message: 'Page generated!'
//             });
//         });
//     });
// };