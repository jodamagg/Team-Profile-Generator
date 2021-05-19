class Employee {
  constructor(name, id, email) {
    if (!name || !id || !email) {
      throw new Error(
        "Expected parameter 'name', 'id', and/or 'email' to be a non empty string"
      );
    }
    if (typeof name !== "string") {
      throw new Error("Expected parameter of 'name' to be a string");
    }
    if (isNaN(id)) {
      throw new Error("Expected parameter of 'id' to be a number");
    }
    if (!email.includes("@") || !email.includes(".")) {
      throw new Error("Expected parameter of 'email' to contain a @ and '.'");
    }
    this.name = name;
    this.id = id;
    this.email = email;
  }
  employeeName() {
    return this.name;
  }
  employeeId() {
    console.log(typeof NaN);
  }
  employeeEmail() {
    console.log(this.email);
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
