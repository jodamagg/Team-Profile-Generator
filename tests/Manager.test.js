const Manager = require("../Lib/Manager");

describe("Manager", () => {
  describe("initialization", () => {
    it("should create an object with an id, email, name, office number", () => {
      //assign
      const obj = new Manager("josh", 2323, "josh44@gmail.com", 3);
      //act
      //assert

      expect(obj.name).toEqual("josh");
      expect(obj.email).toEqual("josh44@gmail.com");
      expect(obj.id).toEqual(2323);
      expect(obj.officeNumber).toEqual(3);
    });
  });
});
