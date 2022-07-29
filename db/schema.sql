

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (

    id INT AUTO_INCREMENT PRIMARY KEY, 

    dep_name VARCHAR(30) NOT NULL

);

CREATE TABLE emp_role (

    id INT AUTO_INCREMENT PRIMARY KEY, 
    
    title VARCHAR(30) NOT NULL,

    salary DECIMAL INT,

    department_id INT NOT NULL,

    FOREIGN KEY (department_id) REFERENCES department (department_id)

);

CREATE TABLE employee (

    id INT AUTO_INCREMENT PRIMARY KEY, 

    first_name VARCHAR(30) NOT NULL,

    last_name VARCHAR(30) NOT NULL,

    role_id INT NOT NULL,

    manager_id INT DEFAULT NULL,

    FOREIGN KEY (role_id) REFERENCES emp_role (id)

);


