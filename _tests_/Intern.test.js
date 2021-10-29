const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Creates an intern object", () => {
        const intern = new Intern("Jack", 31, "jack.bowden@gmail.com", "Monash");

        it("should return the correct type for school", () => {
      
            expect(intern.school).toEqual(expect.any(String));
        });

        it("Check school", () => {
            const intern = new Intern("Jack", 31, "jack.bowden@gmail.com", "Monash");

            expect(intern.getSchool()).toEqual(intern.school);
        });

        it("Check that getRole() returns Intern", () => {
            const intern = new Intern("Jack", 31, "jack.bowden@gmail.com", "Monash");

            expect(intern.getTitle()).toEqual("Intern");
        });
  });
});
