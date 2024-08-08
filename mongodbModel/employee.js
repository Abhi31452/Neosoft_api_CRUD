const mongoose=require("mongoose");

const empSchema = new mongoose.Schema(
    {
        _id: Number,
        emp_Name: String,
        emp_mail: { type: String, default: "abc@gmail.com" },
        emp_sal : Number
    }
)
const employee = mongoose.model("employee", empSchema);

module.exports = employee;

