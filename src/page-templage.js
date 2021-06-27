const generateAbout = aboutText => {
    if (!aboutText) {
        return '';
    }
}

const generateTeam = teamArr => {
    return `
    <section class="my-3" id="team">
    <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
    <div class="flex-row justify-space-between">
    ${teamArr
      .map(({ name, id, email, github }) => {
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3">
          <h3 class="employee-name text-light">${name}</h3>
          <h5 class="employee-id">
            ID#: ${id}
          </h5>
          <h5 class="employee-email text-light">
          ${email}
          </h5>
          <a href="${github}" class="btn"><i class="fab fa-github mr-2"></i>GitHub</a>
        </div>
        `;
        })
        .join('')}

    </div>
    </section>
    `;
};

module.exports = templateData => {
    // destructure page data by section
    const { teamMembers, about, ...header } = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateAbout(about)}
        ${generateTeam(teamMembers)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
  };