class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    // if (|| !name === "undefined" !id === "undefined" || !email == "undefined") {
    //   throw new Error(
    //     "Expected parameter for 'name' 'id' and 'email' to be a non empty string"
    //   );
  }

  employeeName() {
    if (!this.name) {
      throw new Error("Expected parameter of 'name' to be a string ");
    }
  }

  employeeId() {
    if (!this.id) {
      throw new Error("Expected parameter of 'id' to be a number");
    }
  }

  employeeEmail() {
    if (this.email.includes("@", ".") === false) {
      throw new Error("Expected parameter of 'email' to contain @ and '.'");
    }
    if (!this.email) {
      throw new Error("Email required");
    }
  }

  getRole() {
    return "Employee";
  }
}

const employee = new Employee("Joshua", 123456, "joshua_b_lee@yahoo.com");

employee.employeeName();
employee.employeeId();
employee.employeeEmail();
employee.getRole();

module.exports = Employee;
