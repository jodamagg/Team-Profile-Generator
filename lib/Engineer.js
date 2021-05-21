const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, gitName) {
    super(name, id, email);
    this.gitName = gitName;
  }

  getGitName() {
    return this.gitName;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
