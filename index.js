const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager')
const generateHTML = require('./src/generateHtml')

const employees = [];


const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your Managers full name.',
    },
    {
        type: 'input',
        name: 'idNumber',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Mangers office number?', 
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your full name.',
    },
    {
        type: 'input',
        name: 'idNumber',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the Github address?', 
    }
];
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your full name.',
    },
    {
        type: 'input',
        name: 'idNumber',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school are you attending or accepted into?', 
    }
];
const menuQuestion= {
    type: 'list',
    name: 'menu',
    message: 'what would you like to do?',
    choices: ['Add A Engineer', 'Add A Intern', 'Finished'],
};

function start(){
    inquirer.prompt(managerQuestions).then((responses)=>{
        const manager = new Manager(responses.name, responses.idNumber, responses.email, responses.officeNumber)
        employees.push(manager)
    menu()

    })
}

function menu(){
    inquirer.prompt(menuQuestion).then((responses)=>{
       switch(responses.menu){
        case 'Add A Engineer':
            addEngineer()
        break;
        case 'Add A Intern':
            addIntern()
        break;
        case 'Finished':
            generateHTML(employees)
        default: 

       }
    })
};

function addEngineer(){
    inquirer.prompt(engineerQuestions).then((responses)=>{
        const engineer = new Engineer(responses.name, responses.idNumber, responses.email, responses.github)
    employees.push(engineer)
    menu()

    })
    
};

function addIntern(){
    inquirer.prompt(internQuestions).then((responses)=>{
        const intern = new Intern(responses.name, responses.idNumber, responses.email, responses.school)
        employees.push(intern)
        menu()
    })
        
}
start()

