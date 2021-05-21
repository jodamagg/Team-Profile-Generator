const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");
describe("Employee", () => {
  describe("Initialization", () => {
  
    it("should throw an error if no arguments are provided", () => {
      const cb = () => new Employee();
      const err = new Error(
        "Expected parameter 'name', 'id', and/or 'email' to be a non empty string"
      );
      expect(cb).toThrow(err);
    })