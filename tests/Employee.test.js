const Employee = require("../Lib/Employee");

describe("Employee", () => {
  describe("initialization", () => {
    it("should create an object with an id, email, name", () => {
      //assign
      const obj = new Employee("Josh", 2323, "Josh44@aol.com");
      //act
      //assert

      expect(obj.name).toEqual("Josh");
      expect(obj.email).toEqual("Josh44@aol.com");
      expect(obj.id).toEqual(2323);
    });
  });
});
