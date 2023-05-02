const myemployee = (employees) => {
    console.log("Populate", employees);
    console.log(employees[0].name);
    const myemployees = [];
for(let k = 0; k < employees.length; k++){
    let oneEmp = 
        `<div class="col-4 d-flex justify-content-center">
            <div class="card" style="width: 300px;">
                <div class="card-header">
                    <h3>${employees[k].name}</h3>
                    <h3>${employees[k].role}</h3>
                </div>
                <div class="card-body">
                    <p>ID: ${employees[k].id}</p>
                    <p>Email: <a href="mailto:${employees[k].email}">${employees[k].email}</a></p>
                    ${(() => {
                        if (employees[k].oNumber) {
                            return `<p>Office Number: ${employees[k].oNumber}</p>`
                        }
                        else if (employees[k].github) {
                            return `<p>GitHub: <a href="https://github.com/${employees[k].github}">${employees[k].github}</a></p>`
                        }
                        else {
                            return `<p>School: ${employees[k].school}</p>`
                        }
                    })()}
                </div>
            </div>
        </div>`
        myemployees.push(oneEmp);
}
return myemployees.join(" ");
}

const empTest = (employees) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-info">
            <h1 style="font-size: 36px; background-color: red; color: white; align: center;">My Team</h1>
        </nav>
        </br>
        <div class="row justify-content-around" style="grid-row-gap: 30px">
            ${myemployee(employees)}
        </div>
    </body>
    </html>
    `

};

module.exports = empTest;