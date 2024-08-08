const mysql = require('mysql2/promise');

// const connectDB = async () => {
//   try {
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: 'root',
//       database: 'neosoft',
//     });

//     console.log('Connected to the MySQL server.');
//     return connection;
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//     throw error;
//   }
// };


// const user = {
//   last_name : "Amar Panchal",
//   Age : 34,
//   phone :"9090909090",
//   email : "asb@gmail.com"
// }
 const user = {
  first_name : "7",
  last_name : "Amar Panchal",
  Age : 34,
  phone :"9090909090",
  email : "asb@gmail.com",
  password :"abhi123"
}

var connection ;
async function makeConnection(){
     connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        database : 'neosoft' , // use sql mini project database here
        password: 'root'
      }); 

    connection.connect().then((success)=>{
        console.log("connected....");
        // getAllEmployees();
        // getEmployeesById("Abhishek Auti")
        // deleteEmployeeById("4")
        // updateEmployee("1" , user)
        addEmployee(user)
    }).catch((err)=>console.log(err));
}
makeConnection();


async function getAllEmployees(){
    // find all records from collection
    const response=await connection.query('SELECT * from Table1');
    console.log(response);
     console.log("_____________"); 
}

async function getEmployeesById(emp_lastname){
  // find all records from collection
  const [result] = await connection.query(`SELECT * from Table1 where last_name = "${emp_lastname}"`);
  console.log(result);
   console.log("_____________"); 
}

async function deleteEmployeeById(empId){
  const [result]=await connection.query(`delete from Table1 where first_name= "${empId}"`);
  console.log(result);
  console.log("_____________"); 
}

async function updateEmployee(empId, user){
 
  const [data] =await connection.query(`update Table1 set 
                                                    last_name = "${user.last_name}" ,
                                                    Age = ${user.Age},
                                                    phone_no = "${user.phone}",
                                                    email_id = "${user.email}"
                                                    where first_name ="${empId}"`);
   console.log(data);
   console.log("_____________");
}


async function addEmployee(user){
  const response=await connection.query(`insert into Table1
       values("${user.empId}", "${user.last_name}" ,${user.Age},
                                                    "${user.phone}",
                                                    "${user.email}",
                                                    "${user.password}"`);
  console.log(response);
  console.log("_____________"); 
}


// const getAllUsers = async (connection) => {
//   try {
//     const [results, fields] = await connection.query('SELECT * from Table1');
//     console.log('All users:', results);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// };

// const main = async () => {
//     const connection = await connectDB();
//     await getAllUsers(connection);
  
//     await connection.end();
//   };
  
//   main();