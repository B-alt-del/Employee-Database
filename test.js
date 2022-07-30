const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = mysql.createPool({ 
    host: 'localhost',
    database: 'employee_db',
    user: 'root',
    password: 'Bootsismyd0g!'
});  

let arr = [];

const sql = `
SELECT
    JSON_ARRAYAGG(department.dep_name) as DEPS
    FROM department
`

connection.query(sql, (err, data) => {
    if (err) return console.log(err);
    arr = data[0].DEPS;
    console.log(arr);
    process.exit();
})