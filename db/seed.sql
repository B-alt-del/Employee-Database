
USE employee_db;

INSERT INTO department (dep_name) VALUES
    ('HR'),
    ('Finance'),
    ('Legal'),
    ('Engineering'),
    ('Finance');

INSERT INTO emp_role (title, salary, department_id) VALUES
    ('HR Manager', 70000, 1),
    ('HR rep', 45000, 1),
    ('Account Manager', 160000, 2),
    ('Accountant', 100000, 2),
    ('Legal Team Lead', 200000, 3),
    ('Lawyer', 150000, 3),
    ('Lead Engineer', 80000, 4),
    ('Software Engineer', 90000, 4),
    ('Salesperson', 60000, 5),
    ('Accountant', 140000, 5);

INSERT INTO employee (first_name, last_name, role_id) VALUES
    ('Brad', 'Schill', 6),
    ('Timmy', 'Ernst', 7),
    ('Alex', 'Christ', 5),
    ('Jim', 'Simmons', 2),
    ('Jeff', 'Bezos', 3),
    ('John', 'Blart', 1),
    ('Brandy', 'Carlisle', 4),
    ('Parti', 'Poonani', 3),
    ('Alexa', 'Amazon', 8),
    ('Practice', 'Amtrak', 8),
    ('Al', 'Burly', 10),
    ('Bob', 'Lazar', 8);

