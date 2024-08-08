var mysql = require("mysql2/promise")
var connection;
async function makeConnection() {
  connection = await mysql.createConnection({
    host: 'localhost',
    // port     : '3306',
    user: 'root',
    database: 'neosoft', // use sql mini project database here
    password: 'root'
  });


  return connection;
}

module.exports = makeConnection;


// const mysql = require("mysql2/promise");

// const connectDB = async () => {
//   try {
//     const connection = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "root",
//       database: "learn",
//     });
//     console.log("connected___mysql");
//     return connection;
//   } catch (error) {
//     console.error("Database connection error:", error);
//     throw error;
//   }
// };

// module.exports = { connectDB };