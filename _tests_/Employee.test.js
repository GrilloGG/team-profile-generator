const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Creates an employee object", () => {
        const employee = new Employee("Jack", 31, "jack.bowden@gmail.com");
    
        it("should return the correct type for name, id, email", () => {

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });

        it("Check for name", () => {
            const employee = new Employee("Jack", 31, "jack.bowden@gmail.com");

            expect(employee.getName()).toEqual(employee.name);
        });

        it("Check for ID", () => {
            const employee = new Employee("Jack", 31, "jack.bowden@gmail.com");

            expect(employee.getId()).toEqual(employee.id);
        });

        it("Check for email", () => {
            const employee = new Employee("Jack", 31, "jack.bowden@gmail.com");

            expect(employee.getEmail()).toEqual(employee.email);
        });

        it("Check that getRole() returns Employee", () => {
            const employee = new Employee("Jack", 31, "jack.bowden@gmail.com");

            expect(employee.getTitle()).toEqual("Employee");
        });
    });
});