const fs=require("node:fs");

const file="../Files/employees.json";

try{
fs.readFile(file, (error, data)=>{
    if(error)
            throw new Error("error in reading a file");
     console.log(data.toString());  
})}
catch(err){
    console.log(err);
}
console.log("further operation.......");