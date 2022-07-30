USE employee_db;

-- SELECT * FROM department;
-- SELECT * FROM emp_role;
-- SELECT * FROM employee;

-- SELECT 
--     *
--     FROM project_groups
--         JOIN students
--         ON project_groups.group_id = students.group_id;

-- SELECT 
--     dep_name AS 'departments',
--     first_name AS 'employees'
--     FROM department
--         JOIN emp_role ON emp_role.department_id = department.id
--         JOIN employee ON emp_role.id = employee.role_id;
        
    SELECT 
        dep_name
        FROM department

-- SELECT 
--     group_name AS 'Project Groups',
--     student_name AS 'Student'
--     FROM project_groups
--         RIGHT JOIN students
--         ON project_groups.group_id = students.group_id;


-- SELECT
--     COUNT(group_id) AS 'Amount of Groups'
--     FROM project_groups;

-- SELECT
--     group_name,
--     JSON_ARRAYAGG(JSON_OBJECT('student_id', s.student_id, 'name', s.student_name)) AS students
--     FROM project_groups pg
--         JOIN students s
--         ON pg.group_id = s.group_id
--     GROUP BY pg.group_id;