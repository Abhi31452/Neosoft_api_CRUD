const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',       
    port: 3306,
    user:'root',
    password:'root',
    database:'neosoft'
})

connection.connect((err, ...args)=>{
    if(err==null){
     console.log("connected...");
     getAllEmployees();
     getAllEmployees2();
    getEmployeeById("Aniket Ramteke");
   //  deleteEmployeeById(111);
   //  updateEmployee(123,employee);
   //  addEmployee(newEmp);
    }})
 
// connection.query('SELECT * from Table1', function (error, results, fields) {
//   if (error) throw error; 
//   console.log('The solution is: ', results);
// });

function getAllEmployees(){
    // find all records from collection
    connection.query('SELECT * from Table1', function (error, results) {
        console.log(error);
        console.log(results);
      });  
     console.log("_____________"); 
}

async function getEmployeeById(empId){
    
    connection.query(`select * from Table1 where last_name =  '${empId}'`,
        function(error ,data ,fields)
 {
    console.log(data);
    console.log("_____________");   
}); 
}
