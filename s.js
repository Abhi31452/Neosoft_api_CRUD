// const mongodbapi = require("./api/api");
// const productMongoApi = require("./api/productApi")
// //import {middle1, middle2} from './Middlewares/middlewares';

// const cors = require("cors");

// // var mysqlapi=require("./api/EmpAPI")
// const bodyParser = require("body-parser");

// const express = require("express");
// const multer = require("multer");
// const app = express();
// let image;

// app.listen(5000, () => console.log("application server started..."))

// require("./config/mongodb");


// // app.use(bodyParser.urlencoded({extended:true})); /*we are adding middleware with use function */
// app.use(bodyParser.json());
// app.use(cors());
// app.get("/", function (request, response) {
//     console.log(request);
//     response.send("WELCOME TO FIRST NODE PROJECT WITH EXPRESS...........");
// });
// app.get("/employees/getall", async function (request, response) {
//     await mysqlapi.getAllEmployees();
//     const data = await mongodbapi.getAllEmployees();
//     response.send(data);
// });
// app.get("/employees/get/:empId", async function (request, response) {
//     const data = await mongodbapi.getEmployeeById(request.params.empId);
//     response.send(data);
// });
// app.get("/employees/delete/:empId", async function (request, response) {
//     const data = await mongodbapi.deleteEmployeeById(request.params.empId);
//     response.send(data);
// });
// //const parser=bodyParser.urlencoded({extended:true})
// app.post("/employees/add", async function (request, response) {
//     console.log(request.body);
//     return response.json({
//         success: true
//     });
//     // const data=await mongodbapi.addEmployee(request.body);
//     //  response.send(data);
// });
// app.post("/employees/update", async function (request, response) {
//     console.log(request.body);
//     const { _id, ...employee } = request.body;
//     console.log(_id);
//     console.log(employee);
//     const data = await mongodbapi.updateEmployee(_id, employee);
//     response.send(data);
// });

// const upload = multer();

// app.post("/fileadd",upload.single("image"), async function(request, response){
//     console.log("pic:", request.file);
//     image = request.file;
// });

// app.post("/add/product", async function (request, response) {
//     const shoe = {
//         _id: request.body.articleNo,
//         shoeName: request.body.shoeName,
//         brandName: request.body.brandName,
//         category: request.body.category,
//         description: request.body.description,
//         price: request.body.price,
//         discount: request.body.discount,
//         size: request.body.size,
//         color: request.body.color,
//         image: {
//             data: image.buffer,
//             contentType: image.mimetype
//         },
//         gender: request.body.gender
//     };

//     const result = await productMongoApi.addProduct(shoe);

//     return response.status(200).json({
//         success: true,
//         data: result
//     })
// })