// Task 1 Creating an object and an array of Employee Objects
const company = {
 departments: [
 {
 departmentName: 'IT',
 employees: [
    {
     name: 'Kosi',
     salary: 105000,
     subordinates: [
     {
     name: 'Dejalie',
     salary: 80000,
    subordinates: [
     {
     name: 'Eric',
    salary: 60000,
    subordinates: []
     }
     ]
    }
    ]
    },
    {
    name: 'Riley',
    salary: 50000,
    subordinates: []
                }
            ]
        },
        {
     departmentName: 'HR',
     employees: [
    {
     name: 'Shiv',
     salary: 85000,
    subordinates: [
    {
         name: 'Anna',
        salary: 75000,
        subordinates: []
     }
         ]
           },
 {
     name: 'Jen',
     salary: 95000,
     subordinates: []
                }
            ]
        }
    ]
};
// Task 2: Recursive Function to Calculate Total Salary for a specific Department

function calculateDepartmentSalary(departmentName) {
    let totalDepSalary = 0;
    for (let employees of departmentName.employees) { // Loop through all employees in the department     
        totalDepSalary += employees.salary; 
        for (let subordinate of employees.subordinates) { //  adds the salaries of the employee's subordinates 
            totalDepSalary += calculateDepartmentSalary({ employees: [subordinate] });
        }
    }

    return totalDepSalary;
}
const totalDepSalary = calculateDepartmentSalary(HR);
console.log(`Total salary for HR Department: $${totalDepSalary}`); // Outputs total for HR department

// Task 3

function calculateCompanySalary(company) {
    let totalCompanySalary = 0; // intialized company salary

    for (let department of company.departments) { 
        totalCompanySalary += calculateDepartmentSalary(department); // Add the total salary of each department to the company salary
    }

    return totalCompanySalary;
}

const totalSalary = calculateCompanySalary(company);
console.log(`Total Salary for the company as a whole: $${totalSalary}`); // Outputs total salary for the company