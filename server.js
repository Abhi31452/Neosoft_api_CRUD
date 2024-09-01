const express = require("express");
const cors = require("cors");
const multer =require("multer");
const fs = require('fs');
const mongodbapi= require("./api/EmployeeApi");

const {getAllEmployees,getEmployeeById, deleteEmployeeById,updateEmployee, addEmployee} = require('./api/EmployeeApi')
const {getAllEmp, getEmpById, deleteEmpById, updateEmp, addEmp} = require('./api/EmpApi')
const app =express();

app.use(cors({
   origin:'*'
}));

// app.use(cors({
//    origin: 'http://localhost:4001' // Replace with your frontend's origin
// }));

const {middle1,middle2} =require("./middlesware/middleware");
// Middleware to parse JSON request bodies
// app.use(express.json());

// Middleware to parse URL-encoded request bodies with extended option
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const port =4001;
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
   const data = await mongodbapi.getAllEmployees();
   res.send(data)
})




// app.get("/employees/getbyId/:empId" , async function(req ,res){
//     const data = await mongodbapi.getEmployeeById(request.params.empId);
//     console.log(data)
//     res.send(data)
//  })

app.get('/employees/getbyId/:empId', async function(req, res) {
   try {
       // Extract the employee ID from request parameters
       const empId = req.params.empId;

       // Fetch employee data from the database
       const data = await mongodbapi.getEmployeeById(empId);

       // Check if employee data is found
       if (!data) {
           return res.status(404).json({ message: 'Employee not found' });
       }

       // Send the employee data as response
       res.status(200).json(data);
   } catch (error) {
       console.error('Error fetching employee:', error);
       res.status(500).json({ message: 'Internal Server Error' });
   }
});


 app.delete("/employees/deleteByid/:empId", async function(request, response){
   console.log(request.params.emp);
   const data=await mongodbapi.deleteEmployeeById(request.params.empId);
   console.log(data);
   response.send(data);
});



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


// app.post('employees/add', upload.single('employee_pic'), async (req, res) => {
     
//      const { empId, empName, basicsal, deptCode, joiningDate, experience, secretCode, confirmCode } = req.body;
 
//      const newEmployee = new Employee({
//        empId,
//        empName,
//        basicsal,
//        deptCode,
//        joiningDate: new Date(joiningDate),
//        experience,
//        secretCode,
//        confirmCode,
//        employee_pic: {
//          data: req.buffer,
//          contentType: req.mimetype
//        }
//      });
 
//      const data = await newEmployee.save();
     
//     const result = await mongodbapi.addEmployee(data);

//     return response.status(200).json({
//         success: true,
//         data: result
//     })
//    });


   app.post('/employees/add', upload.single('employee_pic'), async (req, res) => {
      try {
      const { empId, empName, basicsal, deptCode, joiningDate, experience, secretCode, confirmCode } = req.body;
   
      const newEmployee = new Employee({
         empId,
         empName,
         basicsal,
         deptCode,
         joiningDate: new Date(joiningDate),
         experience,
         secretCode,
         confirmCode,
         employee_pic: {
            data: req.buffer,  
            contentType: req.mimetype
         }
      });
   
      const data = await newEmployee.save();
      const result = await mongodbapi.addEmployee(data);
      // console.log(newEmployee.empId);
      
   
      return res.status(200).json({
         success: true,
         data: result
      });
      } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
   });
   
// app.post("/employees/add", async function(request, response){
//    console.log("addemployee",request.body);
//    const data=await mongodbapi.addEmployee(request.body);
//    response.send(data);
// });

// app.post("/fileadd",upload.single("employee_pic"), async function(request, response){
//    console.log("pic:", request.file);
//    image = request.file;
// });
app.post('/fileadd', upload.single('employee_pic'), async (req, res) => {
   try {
     if (!req.file) {
       return res.status(400).send('No file uploaded');
     }
     res.send({
       fileName: req.file.originalname,
       fileSize: req.file.size,
       mimeType: req.file.mimetype
     });
   } catch (error) {
     console.error(error);
     res.status(500).send('Error uploading file');
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
