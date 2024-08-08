const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://abhi31452:Z7JJX7MSz6ZfOnOQ@cluster0.vdetb6v.mongodb.net/Neosoft?retryWrites=true&w=majority&appName=Cluster0")
    .then((res) => {
        console.log("connected")

        getAllEmployee()
        getEmployeeById(3)
        // deleteEmployeeById(2);
        const employee = {
            _Id: 6,
            empName: "kiran patil",
            empEmail: "kiran@gmail.com",
            empSalary: 74000
        }
        // updateEmployee(employee)
    })
    .catch((err) => console.log(err));


const empSchema = new mongoose.Schema(
    {
        _id: { type: Number, unique: true, required: true },
        emp_Name: String,
        emp_mail: { type: String, default: "abc@gmail.com" },
        emp_Salary: Number
    }
)
const EmployeeModel = mongoose.model("employee", empSchema);


async function getAllEmployee() {
    const res = await EmployeeModel.find().exec();
    console.log(res);
}


async function getEmployeeById(empId) {
    const data = await EmployeeModel.find({ _id: `${empId}` }); // _id
    console.log(data);
    console.log("_____________");
}

// async function deleteEmployeeById(empId){
//     // find all records from collection
//      const data= await EmployeeModel.deleteOne({_id:empId});
//      console.log(data);
//      console.log("_____________");
// }

async function updateEmployee(employee) {

    const data = await EmployeeModel.updateOne({ _id: employee.empId },
        {
            emp_name: employee.empName,
            emp_email: employee.empEmail,
            emp_salary: employee.empSalary
        });
    console.log(data);
    console.log("_____________");
}