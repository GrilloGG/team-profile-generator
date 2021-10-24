const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, oNumber) {
        super (name, id, email);
        this.oNumber = oNumber;
    };

    getONumber(){
        return this.oNumber;
    };

    getTitle(){
        return "Manager";
    };
}


module.exports = Manager;