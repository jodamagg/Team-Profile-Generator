const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");
describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, an id, and an email", () => {
      const employee = new Employee("Josh", 123456, "joshua_b_lee@yahoo.com");
      expect(employee.name).toEqual("Josh");
      expect(employee.id).toEqual(123456);
      expect(employee.email).toEqual("joshua_b_lee@yahoo.com");
    });
    it("should throw an error if no arguments are provided", () => {
      const cb = () => new Employee();
      const err = new Error(
        "Expected parameter 'name', 'id', and/or 'email' to be a non empty string"
      );
      expect(cb).toThrow(err);
    });
    it("should throw an error if only provided with 1 argument", () => {
      const cb = () => new Employee("Josh");
      const err = new Error(
        "Expected parameter 'name', 'id', and/or 'email' to be a non empty string"
      );
      expect(cb).toThrowError(err);
    });
    it("should throw an error if only provided with 2 argument", () => {
      const cb = () => new Employee("Josh", 123456);
      const err = new Error(
        "Expected parameter 'name', 'id', and/or 'email' to be a non empty string"
      );
      expect(cb).toThrowError(err);
    });
    it("should throw an error if the 'name' is not provided as a string", () => {
      const cb = () => new Employee(123456, 123456, "joshua_b_lee@yahoo.com");
      const err = new Error("Expected parameter of 'name' to be a string");
      expect(cb).toThrowError(err);
    });
    it("should throw an error if the 'id' is not provided as a number", () => {
      const cb = () => new Employee("Josh", "Tarik", "joshua_b_lee@yahoo.com");
      const err = new Error("Expected parameter of 'id' to be a number");
      expect(cb).toThrowError(err);
    });
    it("should throw an error if the 'email' is not provided with an @ and '.'", () => {
      const cb = () => new Employee("Josh", 123456, "joshuableeyahoo");
      const err = new Error(
        "Expected parameter of 'email' to contain a @ and '.'"
      );
      expect(cb).toThrowError(err);
    });
  });
});
