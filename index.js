const inquirer = require("inquirer");
const fs = require('fs');
const template = require('./src/template.js');
const Employees = require('./lib/Employee.js');

const employees = [];


const focusQuestions = [
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
        type: 'list',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern'],
    },
]
const managerQuestions = [{
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number',
  
}];
const engineerQuestion = [{
    type: 'input',
    name: 'github',
    message: 'What is the address to your github page?'
}];
const internQuestion = [{
    type: 'input',
    name: 'school',
    message: 'What school are you currently enrolled in or previously gratuated from?'
}];
const continueQuestion = [{
    type: 'confirm',
    name: 'continue',
    message: 'Would you like to add another employee?',

}];
async function promptEmployeeInfo(addAnother){
    if(!addAnother){
        //const template = generateTemplate(answers);
        console.log('Here is your team: ', Employees);
        //await writeToFile("./index.html", answers)
        return
    };
const employeeInfo = await inquirer.prompt(focusQuestions);
console.log(employeeInfo);
employees.push(employeeInfo);
const {continue: shouldContinue} =  await inquirer.prompt(continueQuestion)
promptEmployeeInfo(shouldContinue);


// need to loop manager,engineer and intern questions into prompt before add question. 
//need to fix why my "here is your team" arr is empty


}
async function app(){
    await promptEmployeeInfo(true);
}
// function addQuestion (){
//     const manager = focusQuestions.role.Managers
//     const engineer = focusQuestions.role.Engineer
//     const intern = focusQuestions.role.Intern
//     if (manager) {
//         return managerQuestions;        
//     }else if (engineer) {
//         return engineerQuestion;
//     }else if (intern){
//         return internQuestion;
//     }else return continueQuestion;
// };
app();