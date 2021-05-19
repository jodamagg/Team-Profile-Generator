const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = github;
  }
}

getGithub() {
return this.gitHub;

}

getRole() {
return "Engineer";
}
}