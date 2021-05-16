const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, an id, and an email", () => {
      const employee = new Employee("Josh", 123456, "joshua_b_lee@yahoo.com");
      expect(employee.name).toEqual("Josh");
      expect(employee.id).toEqual(123456);
      expect(employee.email).toEqual("joshua_b_lee@yahoo.com");
    });
    it("should throw an error if provided no arguments are provided", () => {
      const cb = () => new Employee();
      const err = new Error(
        "Expected parameter for 'name' 'id' and 'email' to be a non empty string"
      );
      expect(cb).toThrow(err);
    });

    it("should throw an error if only provided 1 argument", () => {
      const cb = () => new Employee("Josh");
      const err = new Error("Expected parameter of 'id' and 'email'");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if only provided 2 arguments", () => {
      const cb = () => new Employee("Josh", 123456);
      const err = new Error("Expected parameter of 'id' and 'email'");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the 'name' is not provided as a string", () => {
      const cb = () => new Employee(123456, 123456, "joshua_b_lee@yahoo.com");
      const err = new Error("Expected parameter of 'name' to be a string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the 'email' is not provided with an @ and '.'", () => {
      const cb = () => new Employee("Josh", "Tarik", "joshua_b_lee@.com");
      const err = new Error("Expected parameter of 'id' to be a number");
      expect(cb).toThrowError(err);
    });
  });
});
