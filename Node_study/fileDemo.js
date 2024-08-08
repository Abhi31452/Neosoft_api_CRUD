
const { log } = require("node:console");
const fs=require("node:fs");
const { open}=require("node:fs/promises");

const fd=new File([], "./Files/Mangeshkar.txt")
//const contents=fs.readFileSync(fd.name)
//console.log(contents.toString());
 
console.log("___________________");

async function  readData(){
const fd= await open("./Files/Sachin.txt");
let array=new Buffer.alloc(1024);
fd.read(array,0, 10, 0).then((object) => 
 {  console.log(object.bytesRead);
console.log(object.buffer.toString());

})
.catch((err)=>console.log(err))
.finally(()=>{});
}

// console.log(array.toString());
readData();