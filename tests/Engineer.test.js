const Engineer = require("../Lib/Engineer");

describe("Engineer", () => {
  describe("initialization", () => {
    it("should create an object with an id, email, name, office number", () => {
      //assign
      const obj = new Engineer("Josh", 2323, "josh44@gmail.com", "gitUsername");
      //act
      //assert

      expect(obj.name).toEqual("Josh");
      expect(obj.email).toEqual("josh44@gmail.com");
      expect(obj.id).toEqual(2323);
      expect(obj.gitName).toEqual("gitUsername");
    });
  });
});
