const Intern = require("../Lib/Intern");

describe("Intern", () => {
  describe("initialization", () => {
    it("should create an object with an id, email, name, school", () => {
      //assign
      const obj = new Intern("Josh", 2323, "josh44@gmail.com", "DU");
      //act
      //assert

      expect(obj.name).toEqual("Josh");
      expect(obj.email).toEqual("josh44@gmail.com");
      expect(obj.id).toEqual(2323);
      expect(obj.school).toEqual("DU");
    });
  });
});
