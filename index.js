const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const employees = [];
const fs = require('fs');
const createFile = require('./src/createFile');
const populateSite = require('./src/populateSite');

function init() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Manager name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Id: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'oNumber',
        message: 'Office number',
    }
])
.then((reply) => {
    const manager = new Manager(reply);
    employees.push(manager);
    makeChoice();
});
}

function makeChoice() {
    inquirer.prompt([{
        type: 'list',
        name: 'myChoice',
        message: 'What do you want to do: ',
        choices: ['Add engineer', 'Add intern', 'Finished',]
    }])
    .then((answer) => {
        makeSelection(answer);
    })
}

function makeSelection(answer) {
    var choice = answer.myChoice;
    switch(choice)
    {
        case "Add engineer":
            addEngineer();
            break;
        case "Add intern":
            addIntern();
            break;
        case "Finished":
            createPage();
            break;
        default:
            console.log("No choice selected");
            init();
    }
}

function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Id: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username',
    }
])
.then((reply) => {
    const engineer = new Engineer(reply);
    employees.push(engineer);
    makeChoice();
});
}

function addIntern() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Id: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Your school',
    }
])
.then((reply) => {
    const intern = new Intern(reply);
    employees.push(intern);
    makeChoice();
});
}

function createPage() {
    console.log(employees);
    const createdFile = populateSite(employees);
    createFile(createdFile);     
};

init();