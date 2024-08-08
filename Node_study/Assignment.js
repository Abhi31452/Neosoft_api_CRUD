const mongoose = require('mongoose');

// Define the schema
const empSchema = new mongoose.Schema({
    _id: Number,
    emp_name: { type: String, default: 'neosoft' },
    emp_email: String,
    emp_salary: Number
});

const employee = {
    emp_name : "new name"
}

const newEmp = {
    _id: 8,
    emp_name: 'Amar',
    emp_salary: 50000,
    emp_email: 'amar@gmail.com'
};

// Run all the functions
async function run() {
    await getAllEmployees();
    // await sortEmployeeBysalary();
    // await getEmployeeById(334);
    // await deleteEmployeeById(334);
    // await updateEmployee(335, employee);
    // await addEmployee(newEmp);
    // await aggregateEmployees();
   
}



const EmployeeMod = mongoose.model('employee', empSchema);

// Connect to MongoDB
mailto:mongoose.connect('mongodb+srv://abhi31452:Z7JJX7MSz6ZfOnOQ@cluster0.vdetb6v.mongodb.net/assingment?retryWrites=true&w=majority&appName=Cluster0')
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
        const data = await EmployeeModel.find({}).sort({ emp_salary: 1 }).exec();
        console.log('All Employees:', data);
    } catch (err) {
        console.log('Error fetching all employees:', err);
    }
}

// Function to get an employee by ID
async function getEmployeeById(empId) {
    try {
        const data = await EmployeeModel.findById(empId).exec();
        console.log('Employee by ID:', data);
    } catch (err) {
        console.log('Error fetching employee by ID:', err);
    }
}

// Function to delete an employee by ID
async function deleteEmployeeById(empId) {
    try {
        const result = await EmployeeModel.deleteOne({ _id: empId });
        console.log('Deleted Employee:', result);
    } catch (err) {
        console.log('Error deleting employee by ID:', err);
    }
}

// Function to update an employee
async function updateEmployee(empId, updates) {
    try {
        const result = await EmployeeModel.updateOne({ _id: empId }, updates);
        console.log('Updated Employee:', result);
    } catch (err) {
        console.log('Error updating employee:', err);
    }
}

// Function to add a new employee
async function addEmployee(employee) {
    try {
        const EmployeeDoc = new EmployeeModel(employee);
        const res = await EmployeeDoc.save();
        console.log('Inserted Employee:', res);
    } catch (err) {
        console.log('Error adding employee:', err);
    }
}

// Function to perform aggregation
async function aggregateEmployees() {
    try {
        const employees = await EmployeeModel.find({ emp_salary: { $gte: 10000 } }).exec();
        console.log('Aggregation Result:', employees);
    } catch (err) {
        console.log('Error during aggregation:', err);
    }
}

