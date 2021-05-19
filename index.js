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

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: managerName,
        message: "Manager's name?",
      },
      {
        type: "input",
        name: managerID,
        message: "Manager's ID",
      },
      {
        type: "input",
        name: managerEmail,
        message: "Manager's Email?",
      },
      {
        type: "input",
        name: officeNum,
        message: "Manager's office Number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.officeNum
      );
      teamMembers.push(manager);
      menuFunction();
    });
}

function createEngineer() {
  inquire
    .prompt([
      {
        type: "input",
        name: engineerName,
        message: "Engineer's name?",
      },
      {
        type: "input",
        name: engineerID,
        message: "Engineer's ID ?",
      },
      {
        type: "input",
        name: engineerEmail,
        message: "Engineer's Email?",
      },
      {
        type: "input",
        name: gitHub,
        message: "Engineer's gitHub?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.engineerName,
        answers.engineerID,
        answer.engineerEmail,
        answer.gitHub
      );
      teamMembers.push(intern);
      menuFunction();
    });
}
function createIntern() {
  inquire
    .prompt([
      {
        type: "input",
        name: internName,
        message: "Intern's name?",
      },
      {
        type: "input",
        name: internID,
        message: "Intern's ID ?",
      },
      {
        type: "input",
        name: internEmail,
        message: "Intern's Email?",
      },
      {
        type: "input",
        name: school,
        message: "Intern's school?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internID,
        answer.internEmail,
        answer.school
      );
      teamMembers.push(intern);
      menuFunction();
    });
}

menuFunction();
inquirer
  .prompt({
    type: "list",
    name: menu,
    message: "Would you like to add another employee",
    choices: ["engineer", "intern", "none"],
  })
  .then((answer) => {
    if (answer.menu === "engineer") {
      createEngineer();
    } else if (answer.menu === "intern") {
      createIntern();
    }
    //look up fs write file arguments
    // else {
    //   writeFile(`index.html`, generateMarkdown(teamMembers));
    // }
  });
