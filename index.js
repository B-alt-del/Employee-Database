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
        name: "init_selection",
        choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee"]
    }
];

function init(){
    inquirer.prompt(init_options)
        .then((data) => {
            console.log(data)
        })
}

function view_departments() {

}





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

