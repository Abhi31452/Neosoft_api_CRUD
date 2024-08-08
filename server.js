const express = require("express");
const {getAllEmployees,getEmployeeById, deleteEmployeeById,updateEmployee, addEmployee} = require('./api/EmployeeApi')
const {getAllEmp, getEmpById, deleteEmpById, updateEmp, addEmp} = require('./api/EmpApi')
const app =express();

app.use(express.json());
// Middleware to parse URL-encoded request bodies with extended option
app.use(express.urlencoded({ extended: true }));

app.listen(5000, ()=>console.log("application server started..."))



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



// const parser=bodyParser.urlencoded({extended:true})

// app.post("/employees/add", parser, async function(request, response){
//     console.log(request.body);
//     const data=await addEmployee(request.body);
//     response.send(data);
// });

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
    
    res.send(data)
 })

 const user = {

    last_name : "Raj Panchal",
    Age : 24,
    phone :"90454909090",
    email : "raj@gmail.com",
    password :"raj123"
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
