const mongoose=require("mongoose");

const empSchema = new mongoose.Schema(
    {

        // public empid =0,
        // public empName ="",
        // public joiningDate = new Date(),
        // public basicsal=0,
        // public deptCode="",
        // public experience=21,
        // public dob = new Date(),
        // public Aged = 0,
        // public secretCode =0,
        // public confirmCode =0
        
        empId: Number,
        empName: String,
        // emp_mail: { type: String, default: "abc@gmail.com" },
        basicsal : Number,
        deptCode : String,
        joiningDate :Date,
        experience :Number,
        secretCode: Number,
        confirmCode :Number,
        employee_pic:{
            data:Buffer,
            contentType:String
        }


    }
)
const employee = mongoose.model("employee", empSchema);

module.exports = employee;

    