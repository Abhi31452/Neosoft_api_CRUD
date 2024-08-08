const makeConnection=require("../config/mysqldb");
async function getAllEmp(){
    const connection = await makeConnection()
    console.log(connection);
    // find all records from collection
    const result=await connection.query('SELECT * from Table1');
    return result[0];
}

/* use ur table  and primary key column of ur table*/
async function getEmpById(empId){
    const connection = await makeConnection()
    const result=await connection.query(`SELECT * from Table1 where first_name="${empId}"`);
    return result[0];
}
async function deleteEmpById(empId){
    const connection = await makeConnection()
    const response=await connection.query(`delete from Table1 where first_name=${empId}`);
    return response;
}
async function updateEmp( user){
    const connection = await makeConnection()

    const [response] =await connection.query(`update Table1 set 
                                           last_name = "${user.last_name}" ,
                                           Age = ${user.age},
                                           phone_no = "${user.phone_no}",
                                           email_id = "${user.email}",
                                           password = "${user.password}",
                                           where first_name ="${user.first_name}"`);
                                          
   return response; 
}

async function addEmp(user){
    const connection = await makeConnection()
    const response=await connection.query(`insert into Table1 values("${user.first_name}", "${user.last_name}",${user.age}, "${user.phone_no}", "${user.email}", "${user.password}");`)
    return response;
}


module.exports={getAllEmp, getEmpById, deleteEmpById, updateEmp, addEmp}

