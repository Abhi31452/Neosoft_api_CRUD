const { log } = require("node:console");
const fs=require("node:fs");

// const con =  fs.readFileSync("./Files/Sachin.txt");

// console.log(con);
// console.log(con.toString());
// console.log("Further data /................");

let filepath = "./Files/Sachin.txt";

function readData(filepath)
{
    const con = fs.readFile(filepath);
    return con.toString();
}

function writeData(content){
    fs.writeFile(filepath,content);
}
writeData("Lore..................................cnxndkjsnkjndsk edfsakjnaslkscakjnoq;QEJJEWD LASJkjdwk");
console.log("file write compl");

console.log(fs.readFile(filepath));
