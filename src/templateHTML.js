const generateManager = function (manager) {
    return `
    <div class="card">
        <div class="card-header card-header-manager">
            <h2>${manager.name}</h2>
            <h4><span class="material-icons">playlist_add_check_circle</span>  Manager</h4>
        </div>
        <div class="card-body">
            <p><b>ID:</b> ${manager.id}</p>
            <p><b>Email:</b> <a href="mailto:${manager.email}"> ${manager.email}</a></p>
            <p><b>Office Number:</b> ${manager.oNumber}</p>
        </div>
    </div>
    `
};

const generateEngineer = function (engineer) {
    return `
    <div class="card">
        <div class="card-header card-header-engineer">
            <h2>${engineer.name}</h2>
            <h4><span class="material-icons">engineering</span>  Engineer</h4>
        </div>
        <div class="card-body">
            <p><b>ID:</b> ${engineer.id}</p>
            <p><b>Email:</b> <a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
            <p><b>Github:</b> <a href="https://github.com/${engineer.github}" target="_blank"> ${engineer.github}</a></p>
        </div>
    </div>
    `
};

const generateIntern = function (intern) {
    return `
    <div class="card">
        <div class="card-header card-header-intern">
            <h2>${intern.name}</h2>
            <h4><span class="material-icons">school</span>  Intern</h4>
        </div>
        <div class="card-body">
            <p><b>ID:</b> ${intern.id}</p>
            <p><b>Email:</b><a href="mailto:${intern.email}"> ${intern.email}</a></p>
            <p><b>School:</b> ${intern.school}</p>
        </div>
    </div>
    `
};

templateHTML = (data) => {
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getTitle(); 
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;
}

const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" >
              <h1>My Team</h1>
          </nav>
      </header>
      
      <main>
          <div class="container">
                  ${employeeCards}
          </div>
      </main>
  
  <script src="https://code.jquery.com/jquery-3.6.0.slim.js" integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=" crossorigin="anonymous"></script>
  </body>
  </html>
`;
}

// export to index
module.exports = templateHTML; 