const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const teamMembers = [];
// function addManager {
// inquirer prompts
//  push teamMembers
// run menu function below
//}
// inquirer menu - intern or engineer or done
// function addIntern or addEngineer or write file and exit
// writeFile(teamMembers)
// const engineer = new Engineer(answers.engineerName, answers.engineerId) => push that into teamMembers

let teamMembers = [];
const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },
  {
    type: "input",
    messgae: "What is your office number?",
    name: "officeNum",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },
  {
    type: "input",
    messgae: "What is your Git Hub username?",
    name: "username",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },
  {
    type: "input",
    messgae: "What is your school?",
    name: "school",
  },
];

function getEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: "list",
        messgae: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern", "None"],
        name: "role",
      },
    ])
    .then((data) => {
      switch (data.role) {
        case "Manager":
          inquirer.prompt(managerQuestions).then((data) => {
            let newManager = new Manager(
              data.name,
              data.id,
              data.email,
              data.officeNum
            );
            teamMembers.push(newManager);
            getEmployeeInfo();
          });
          break;
        case "Engineer":
          inquirer.prompt(engineerQuestions).then((data) => {
            let newEngineer = new Engineer(
              data.name,
              data.id,
              data.email,
              data.username
            );
            teamMembers.push(newEngineer);
            getEmployeeInfo();
          });
          break;
        case "Intern":
          inquirer.prompt(internQuestions).then((data) => {
            let newIntern = new Intern(
              data.name,
              data.id,
              data.email,
              data.school
            );
            teamMembers.push(newIntern);
            getEmployeeInfo();
          });
          break;
        case "None":
          fs.writeFileSync(
            path.join(__dirname, "index.html"),
            generateHTML(teamMembers),
            (err) => {
              err ? console.error(err) : console.log("html generated");
            }
          );
          break;
      }
    });
}

function generateHTML(teamMembers) {
  let temp = "";
  teamMembers.forEach((employee) => {
    temp += generateEmpCard(employee);
  });
  return `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=, initial-scale=1.0" />
    <link rel="stylesheet" href="./bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
      <header> My Team</header>
      <header><h1>TEAM</h1></header>
    <div class="row">
      
      ${temp}
  </body>
</html>
   `;
}
function generateEmpCard(employee) {
  switch (employee.getRole()) {
    case "Manager":
      return `<div class="card text-gray bg-primary m-3 col-2">
            <div class="card-header">Manager: ${employee.name} </div>
            <div class="card-body">
              <p class="card-text">ID:${employee.id} </p>
              <p class="card-text">Email: <a href="mailto: ${employee.email} ">${employee.email}</a> </p>
              <p class="card-text">Office number: ${employee.officeNumber} </p>
            </div>
          </div>`;
      break;
    case "Engineer":
      return `<div class="card text-gray bg-primary m-3 col-2">
        <div class="card-header">Engineer: ${employee.name} </div>
        <div class="card-body">
          <p class="card-text">ID: ${employee.id} </p>
          <p class="card-text">
            Email: <a href="mailto: ${employee.email} ">${employee.email}</a> </p>
          <p class="card-text">
            GitHub:
            <a href="https://github.com/${employee.gitName}" target="_blank">${employee.gitName}</a>
          </p>
        </div>
      </div>`;
      break;
    case "Intern":
      return `<div class="card text-gray bg-primary m-3 col-2">
        <div class="card-header">Intern: ${employee.name} </div>
        <div class="card-body">
          <p class="card-text">ID: ${employee.id} </p>
          <p class="card-text">
            Email: <a href="mailto: ${employee.email} ">${employee.email}</a> </p>
          <p class="card-text">
            school: ${employee.school}
          </p>
        </div>
      </div>`;
      break;
  }
}
getEmployeeInfo();
