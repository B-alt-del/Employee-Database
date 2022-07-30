const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = mysql.createPool({ 
    host: 'localhost',
    database: 'employee_db',
    user: 'root',
    password: 'Bootsismyd0g!'
});  

const init_options = [
    {
        type: "list",
        message: "\nWhat would you like to do:",
        name: "choice",
        choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee"]
    }
];

function init(){
    inquirer.prompt(init_options)
        .then((data) => {

            switch (data.choice) {
                case "View all Departments":
                    view_departments();
                    break;

                case "View all Roles":
                    view_roles();
                    break;

                case "View all Employees":
                    view_employees();
                    break;

                case "Add a Department":
                    add_department();
                    break;

                case "Add a Role":
                    add_role();
                    break;

                case "Add an Employee":
                    add_employee();
                    break;

                case "Update an Employee":
                    update_employee();
                    break;
            }
        })
}

function view_departments() {
    const sql = `
        SELECT
            JSON_ARRAYAGG(department.dep_name) as DEPS
            FROM department
        `;
    connection.query(sql, (err, data) => {
        if (err) return console.log(err);
    
        console.table(data[0].DEPS);
        process.exit();
    })
}
function view_roles() {
    const sql = `
        SELECT
            JSON_ARRAYAGG(emp_role.title) as DEPS
            FROM emp_role
        `;
    connection.query(sql, (err, data) => {
        if (err) return console.log(err);
    
        console.table(data[0].DEPS);
        process.exit();
    })
}
function view_employees() {
    const sql = `
        SELECT
            JSON_ARRAYAGG(JSON_OBJECT("First", employee.first_name, "Last", employee.last_name)) as DEPS
            FROM employee
        `;
    connection.query(sql, (err, data) => {
        if (err) return console.log(err);
    
        console.table(data[0].DEPS);
        process.exit();
    })
}
function add_department(input) {
    inquirer.prompt(
        {
            type: "input",
            name: "input",
            message: "Write name of added Department:"
        }
    ).then((data) => {
        let {input} = data

        const sql = `INSERT INTO department (dep_name) VALUES ('${input}')`;

        connection.query(sql, (err, data) => {
            if (err) return console.log(err);
            console.log("Department added succesfully");
            process.exit();
        })
    })
}
function add_role() {
    inquirer.prompt(
        {
            type: "input",
            name: "input",
            message: "Write name of added Role:"
        }
    ).then((data) => {
        let {input} = data

        const sql = `INSERT INTO emp_role (title) VALUES ('${input}')`;

        connection.query(sql, (err, data) => {
            if (err) return console.log(err);
            console.log("Role added succesfully");
            process.exit();
        })
    })
}
function add_employee() {
    let roles = [];
    const sql = `
        SELECT
            JSON_ARRAYAGG(department.dep_name) as DEPS
            FROM department
        `
    connection.query(sql, (err, data) => {
        if (err) return console.log(err);
        roles = data[0].DEPS;
        process.exit();
    }).then(()=>{
        inquirer.prompt([
            {
                type: "input",
                name: "first",
                message: "First Name:"
            },
            {
                type: "input",
                name: "last",
                message: "Last Name:"
            },
            {
                type: "list",
                message: "Employee's Role:",
                name: "role",
                choices: `${roles}`
            }
        ])
    }).then((data) => {
        let {first,last,role} = data;

        const sql = `INSERT INTO employee (first_name, last_name, role_id) VALUES ('${first}','${last}','${role}')`;

        connection.query(sql, (err, data) => {
            if (err) return console.log(err);
            console.log("Employee added succesfully");
            process.exit();
        })
    })
}
function update_employee() {
    const sql = `
        SELECT
            JSON_ARRAYAGG(department.dep_name) as DEPS
            FROM department
        `;
    connection.query(sql, (err, data) => {
        if (err) return console.log(err);
    
        console.table(data[0].DEPS);
        process.exit();
    })
}

// SELECT
// group_name,
// JSON_ARRAYAGG(JSON_OBJECT('student_id', s.student_id, 'name', s.student_name)) AS students
// FROM project_groups pg
//     JOIN students s
//     ON pg.group_id = s.group_id
// GROUP BY pg.group_id;



init();
















// console.table([
//     {
//         id: 12,
//         name: 'Brad',
//         role: 'student',
//     },
//     {
//         id: 14,
//         name: 'casey',
//         role: 'manager',
//     },
//     {
//         id: 16,
//         name: 'sarah',
//         role: 'boss'
//     }
// ])

