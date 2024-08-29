const mongoose = require('mongoose');

// Define the schema
const empSchema = new mongoose.Schema({
    _id: Number,
    emp_name: { type: String, default: 'neosoft' },
    emp_email: String,
    emp_salary: Number
});

const employee = {
    emp_name : "Abhishek"
}

const newEmp = {
    _id: 4,
    emp_name: 'Aniket',
    emp_salary: 18000,
    emp_email: 'aniket@gmail.com'
};

// Run all the functions
async function run() {
    // await getAllEmployees();
    // await sortEmployeeBysalary();
    // await getEmployeeById(1);
    // await deleteEmployeeById(1);
    // await updateEmployee(1, employee);
    // await addEmployee(newEmp);
    // await aggregateEmployees();
    // updateEmployees(filterCriteria, updateFields);

   
}

const EmployeeMod = mongoose.model('employee', empSchema);

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhi31452:Z7JJX7MSz6ZfOnOQ@cluster0.vdetb6v.mongodb.net/assignment?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB...');
        run();
    })
    .catch(err => console.log('Connection error:', err));


// Function to get all employees
async function getAllEmployees() {
    try {
        const data = await EmployeeMod.find().exec();
        console.log('All Employees:', data);
    } catch (err) {
        console.log('Error fetching all employees:', err);
    }
}

// Funtion to get all employees with ascendinig sort
async function sortEmployeeBysalary() {
    try {
        const data = await EmployeeMod.find({}).sort({ emp_salary: 1 }).exec();
        console.log('All Employees:', data);
    } catch (err) {
        console.log('Error fetching all employees:', err);
    }
}

// Function to get an employee by ID
async function getEmployeeById(empId) {
    try {
        console.log(empId)
        const data = await EmployeeMod.findById(empId).exec();
        console.log('Employee by ID:', data);
    } catch (err) {
        console.log('Error fetching employee by ID:', err);
    }
}

// Function to delete an employee by ID
async function deleteEmployeeById(empId) {
    try {
        const result = await EmployeeMod.deleteOne({ _id: empId });
        console.log('Deleted Employee:', result);
    } catch (err) {
        console.log('Error deleting employee by ID:', err);
    }
}

// Function to update an employee
async function updateEmployee(empId, updates) {
    try {
        const result = await EmployeeMod.updateOne({ _id: empId }, updates);
        console.log('Updated Employee:', result);
    } catch (err) {
        console.log('Error updating employee:', err);
    }
}

// Function to add a new employee
async function addEmployee(employee) {
    try {
        const EmployeeDoc = new EmployeeMod(employee);
        const res = await EmployeeDoc.save();
        console.log('Inserted Employee:', res);
    } catch (err) {
        console.log('Error adding employee:', err);
    }
}

// Function to perform aggregation
async function aggregateEmployees() {
    try {
        const employees = await EmployeeMod.find({ emp_salary: { $lte: 18000 } }).exec();
        console.log('Aggregation Result:', employees);
    } catch (err) {
        console.log('Error during aggregation:', err);
    }
}

//
const filterCriteria = { emp_salary: { $lt: 13000 } }; 
const updateFields = {
    emp_name: 'John Doe',
    emp_salary: 18000
};async function updateEmployees(filterCriteria, updateFields) {
    try {
        const result = await EmployeeMod.updateMany(
            filterCriteria, 
            {
                $inc: { emp_salary: 5000 }, // Increment the salary by 5000
                $set: { emp_name: updateFields.emp_name } // Set the name if needed
            }
        );

        console.log('Update Result:', result);
    } catch (err) {
        console.error('Error updating employees:', err);
    }
}



