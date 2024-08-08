
const fspromise = require('node:fs/promises');

async function  readData(){
   const contents= await fspromise.readFile("./Files/Tendulkar.txt");
   console.log(contents.toString());
   console.log("further operation 1......");
}

readData();
console.log("further operation 2......");

 function  readData2(){
     const res=fspromise.readFile("./Files/Mangeshkar.txt")
                        .then((data)=>console.log(data.toString()))
                        .catch((errr)=>console.log(errr))
                        .finally(()=>console.log("finally block executes in any case"));
     console.log(res);
     console.log("further operation 3......");
 }
 
 
 
 readData2();
 
 console.log("further operation 4......");