const express = require("express");
const cors = require("cors");
const multer =require("multer");
const fs = require('fs');

const {getAllEmployees,getEmployeeById, deleteEmployeeById,updateEmployee, addEmployee} = require('./api/EmployeeApi')
const {getAllEmp, getEmpById, deleteEmpById, updateEmp, addEmp} = require('./api/EmpApi')
const app =express();

app.use(cors({
   origin:'*'
}));
const {middle1,middle2} =require("./middlesware/middleware");
// Middleware to parse JSON request bodies
// app.use(express.json());

// Middleware to parse URL-encoded request bodies with extended option
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const port =4000;
app.listen(port, ()=>console.log(`application server started ${port}...`))




// app.use(middle1)
// app.use(middle2)


require("./config/mongodb");
require("./config/mysqldb");



app.get("/" , function(req ,res){
    console.log(req);
    res.send("welcome.........")
});


app.get("/employees/getAll" , async function(req ,res){
   const data = await getAllEmployees();
   res.send(data)
})




app.get("/employees/getbyId/:emp" , async function(req ,res){
    const data = await getEmployeeById(res.params.emp);
    console.log(data)
    res.send(data)
 })

//  let employee_pic;
// const upload = multer();
// app.post("/employees/fileadd",upload.single("employee_pic"), async function(request, response){
//     console.log("pic:", request.file);
//     employee_pic=request.file;
// });



// ...................................................

// const Image = mongoose.model('Image', employee.js);
// app.post("/employees/add", async function(request, response){
   
//    request.body.employee_pic =employee.pic;
//    //  response.json(request.body);
//    console.log(request.body);
//    const data = await mongodbapi.addEmployee(request.body);
//    response.send(data);
// });


// / Import the Employee model
const Employee = require('./mongodbModel/employee');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// Handle file upload and employee data
app.post('/employees/add', upload.single('employee_pic'), async (req, res) => {
  try {

   if (!req.file) {
      return res.status(400).send('No file uploaded');
    }
    // Extract employee details from request body
    const { empId, empName, basicsal, deptCode, joiningDate, experience, secretCode, confirmCode } = req.body;

    // Create a new Employee document
    const newEmployee = new Employee({
      empId,
      empName,
      basicsal,
      deptCode,
      joiningDate: new Date(joiningDate), // Convert to Date object
      experience,
      secretCode,
      confirmCode,
      employee_pic: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });

    // Save the new employee to MongoDB
    const data = await newEmployee.save();
    res.send('Employee added successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding employee');
  }
});


// app.post("/employees/update", parser, async function(request, response){
//     console.log(request.body); 
//     const {_id, ...employee}=request.body;
//     console.log(_id);
//     console.log(employee);
//     const data=await updateEmployee(_id ,employee);
//     response.send(data);
// });





//.....................................................

app.get("/emp/getAll" , async function(req ,res){
    const data = await getAllEmp();
    console.log(data);
    console.log()
    
    res.send(data)
 })

 const user = {

    last_name : "Raj Panchal",
    Age : 24,
    phone :"90454909090",
    email : "raj@gmail.com",
    password :"raj123",
    profilepic :"null"
  }

 app.post("/emp/updateEmp" , async function(req ,res){
   console.log(req.body);
   const {}= req.body;
    const data = await updateEmp(req.body);
    console.log(data);
    res.send(data)
 })

 app.get("/emp/getEmpById/:emp" , async function(req ,res){
    const data = await  getEmpById(req.params.emp);
    console.log(data);
    res.send(data)
 })

 app.get("/emp/delEmpById/:emp" , async function(req ,res){
    const data = await  deleteEmpById(req.params.emp);
    console.log(data);
    res.send(data)
 })
 
 app.post("/emp/addEmp" , async function(req ,res){
   console.log("req body ->",req.body)
   const data = await  addEmp(req.body);
   console.log(data);
   res.send(data)
})
