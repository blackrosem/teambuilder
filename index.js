const inquirer = require('inquirer');
// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');

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
        name: 'emailaddress',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'officenumber',
        message: 'Office number',
    }
])
.then(() => {
    makeChoice();
})
// .then((reply) => {
//     const manager = new Manager();
//     manager.name = reply.name;
//     manager.id = reply.id;
//     manager.email = reply.emailaddress;
//     manager.role = 'Manager';
//     manager.oNumber = reply.officenumber;
// });
// console.log(manager.name);
// console.log(manager.id);
// console.log(manager.email);
// console.log(manager.role);
// console.log(manager.oNumber);
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
        name: 'emailaddress',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'gusername',
        message: 'Github username',
    }
])
.then(init());
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
        name: 'emailaddress',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Your school',
    }
])
.then(init());
}

function createPage() {
    console.log("Create page");
}

init();