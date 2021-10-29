const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Creates an engineer object", () => {
        const engineer = new Engineer("Jack", 31, "jack.bowden@gmail.com", "jackbowdewn11");

        it("should return the correct type for github", () => {
      
            expect(engineer.github).toEqual(expect.any(String));
        });

        it("Check for github", () => {
            const engineer = new Engineer("Jack", 31, "jack.bowden@gmail.com", "jackbowdewn11");

            expect(engineer.getGithub()).toEqual(engineer.github);
        });

        it("Check that getRole() returns Engineer", () => {
            const engineer = new Engineer("Jack", 31, "jack.bowden@gmail.com", "jackbowdewn11");

            expect(engineer.getTitle()).toEqual("Engineer");
        });
    });
});

