

function generateHTML(employees) {

  function managerHtml(manager) {
    return  `
    <div class= "employee-card">
        <div class= "card-header">
            <h2 class= "card-title">${manager.getName()}</h2>
            <h3 class= "card-title">${manager.getRole()}</h3>
        </div>
        <div class = "card-body">
            <ul class = "list-group">
                <li class = "list-group-item">ID: ${manager.getId()}</li>
                <li class = "list-group-item">EMAIL: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class = "list-group-item">OFFICE NUMBER: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>      
`;
  }

  function engineerHtml(engineer) {
    return  `
    <div class= "employee-card">
        <div class= "card-header">
            <h2 class= "card-title">${engineer.getName()}</h2>
            <h3 class= "card-title">${engineer.getRole()}</h3>
        </div>
        <div class = "card-body">
            <ul class = "list-group">
                <li class = "list-group-item">ID: ${engineer.getId()}</li>
                <li class = "list-group-item">EMAIL: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class = "list-group-item">GITHUB ADDRESS: <a href= "https://github.com/${engineer.getGithub()}">https://github.com/${engineer.getGithub()}"</a></li>
            </ul>
        </div>
    </div>      
    `;
  }

  function internHtml(intern) {
    return `
    <div class= "employee-card">
        <div class= "card-header">
            <h2 class= "card-title">${intern.getName()}</h2>
            <h3 class= "card-title">${intern.getRole()}</h3>
        </div>
        <div class = "card-body">
            <ul class = "list-group">
                <li class = "list-group-item">ID: ${intern.getId()}</li>
                <li class = "list-group-item">EMAIL: <a href="mailto:${intern.getEmail()}</li>
                <li class = "list-group-item">SCHOOL: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>     
`;
  }

  const resultHtml = [];

  resultHtml.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerHtml(manager))
  );
  resultHtml.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerHtml(engineer))
  );
  resultHtml.push(
    employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internHtml(intern))
  );

  return resultHtml.join('')
}

module.exports = (team) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </head>
    <body>
    <header>
    <h1>Team</h1>
    </header>
    <main class="container-fluid">
      ${generateHTML(team)}
      </main>
    </body>
    </html>`;
};
