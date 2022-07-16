const fs = require('fs');
const Manager = require('../lib/Manager');
const path = require('path')

const handleEmployees = {
    Manager: manager => {
        return `
        <div class= "employee-card'>
            <div class= "card-header">
                <h2 class= "card-title">${manager.getName()}</h2>
                <h3 class= "card-title">${manager.getRole()}</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item>ID: ${manager.getId()}</li>
                    <li class = "list-group-item>EMAIL: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class = "list-group-item>OFFICE NUMBER: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>      
    `;
    },
    Engineer: engineer => {
        return `
        <div class= "employee-card'>
            <div class= "card-header">
                <h2 class= "card-title">${engineer.getName()}</h2>
                <h3 class= "card-title">${engineer.getRole()}</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item>ID: ${engineer.getId()}</li>
                    <li class = "list-group-item>EMAIL: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class = "list-group-item>GITHUB ADDRESS: <a href= "https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferer"></a></li>
                </ul>
            </div>
        </div>      
        `;
    },
    Intern: intern => {
        return `
        <div class= "employee-card'>
            <div class= "card-header">
                <h2 class= "card-title">${intern.getName()}</h2>
                <h3 class= "card-title">${intern.getRole()}</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item>ID: ${intern.getId()}</li>
                    <li class = "list-group-item>EMAIL: ${intern.getEmail()}</li>
                    <li class = "list-group-item>SCHOOL: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>      
    `;
    },
    Employee: employee => {
        return `
        <div class= "employee-card'>
            <div class= "card-header">
                <h2 class= "card-title">${employee.getName()}</h2>
                <h3 class= "card-title">${employee.getRole()}</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item>ID: ${employee.getId()}</li>
                    <li class = "list-group-item>EMAIL: ${employee.getEmail()}</li>
                </ul>
            </div>
        </div>      
    `;
    },
}
function generateHTML(data){
    let html = ''
    // console.log(data)
    data.forEach(employee => {
       html += handleEmployees[employee.constructor.name](employee);
    //    console.log(employee.constructor.name)
    });
    let page = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
      ${html}
    </body>
    </html>`;

    fs.writeFileSync(path.join(__dirname, '/dist/index.html'), page)
}

module.exports = generateHTML
