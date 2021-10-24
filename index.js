const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const arrayTeam = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name : "name",
            message: "Please enter manager's name:",
            validate: nameInput => {
                if (!nameInput || !isNaN(nameInput)){
                    console.log("  ------- Please enter a valid mandager's name");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name : "id",
            message: "Please enter manager's ID:",
            validate : number => {
                if (isNaN(number)){
                    console.log("  ------- Please enter a valid manager's Id (only numbers)");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name : "email",
            message: "Please enter manager's email:",
            validate : email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                      return true;
                  } else {
                      console.log("  ------- Please enter a valid email (test@test.com)");
                      return false;
                  }
            }
        },
        {
            type: "input",
            name : "oNumber",
            message: "Please enter manager's office number:",
            validate : number => {
                if (isNaN(number)){
                    console.log("  ------- Please enter a valid manager's Id (only numbers)");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInformation => {
        const { name, id, email, oNumber} = managerInformation;
        const manager = new Manager (name, id, email, oNumber)
        arrayTeam.push(manager)
        console.log(managerInformation)
        addEmployee()
    })
    
}
addManager()

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please select the role of your employee:",
            choices: ["Engineer", "Intern", "My team is completed"],

            },
    ])
    .then(function (data){
        switch(data.role){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "My team is completed":
                console.log(arrayTeam)
                break;
        }
    });
}

const addEngineer = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name : "name",
            message: "Please enter engineer's name:",
            validate: nameInput => {
                if (!nameInput || !isNaN(nameInput)){
                    console.log("  ------- Please enter a valid Engineer's name");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name : "id",
            message: "Please enter Engineer's ID:",
            validate : number => {
                if (isNaN(number)){
                    console.log("  ------- Please enter a valid Engineer's Id (only numbers)");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name : "email",
            message: "Please enter Engineer's email:",
            validate : email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                      return true;
                  } else {
                      console.log("  ------- Please enter a valid email (test@test.com)");
                      return false;
                  }
            }
        },
        {
            type: "input",
            name : "github",
            message: "Please enter Engineer's github:",
            validate : github => {
                if (!github || !isNaN(github)){
                    console.log("  ------- Please enter a valid Engineer's name");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(engineerInformation => {
        const { name, id, email, github} = engineerInformation;
        const engineer = new Engineer (name, id, email, github)
        arrayTeam.push(engineer)
        console.log(engineerInformation)
        addEmployee()
    })
}

const addIntern = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name : "name",
            message: "Please enter Intern's name:",
            validate: nameInput => {
                if (!nameInput || !isNaN(nameInput)){
                    console.log("  ------- Please enter a valid Intern's name");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name : "id",
            message: "Please enter Intern's ID:",
            validate : number => {
                if (isNaN(number)){
                    console.log("  ------- Please enter a valid Intern's Id (only numbers)");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name : "email",
            message: "Please enter Intern's email:",
            validate : email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                      return true;
                  } else {
                      console.log("  ------- Please enter a valid email (test@test.com)");
                      return false;
                  }
            }
        },
        {
            type: "input",
            name : "school",
            message: "Please enter Intern's school:",
            validate : school => {
                if (!school || !isNaN(school)){
                    console.log("  ------- Please enter a valid Intern's name");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(internInformation => {
        const { name, id, email, school} = internInformation;
        const intern = new Intern (name, id, email, school)
        arrayTeam.push(intern)
        console.log(internInformation)
        addEmployee()
    })
}

