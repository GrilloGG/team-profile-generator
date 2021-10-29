const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Creates a manager object", () => {
        const manager = new Manager("Jack", 31, "jack.bowden@gmail.com", 5);

        it("should return the correct type for the office number", () => {
            
            expect(manager.oNumber).toEqual(expect.any(Number));
        });

        it("Check office", () => {
            const manager = new Manager("Jack", 31, "jack.bowden@gmail.com", 5);
            expect(manager.getONumber()).toEqual(manager.oNumber);
        });

        it("Check that getRole() returns Manager", () => {
            const manager = new Manager("Jack", 31, "jack.bowden@gmail.com", 5);
            expect(manager.getTitle()).toEqual("Manager");
        });
    });
});
