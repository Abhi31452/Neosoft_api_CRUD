    const mongoose=require("mongoose");

    mongoose.connect("mongodb+srv://abhi31452:Z7JJX7MSz6ZfOnOQ@cluster0.vdetb6v.mongodb.net/Neosoft?retryWrites=true&w=majority&appName=Cluster0")
    .then((success)=>{console.log("connected......")
        require("../mongodbModel/employee"); // what schema and models we are using
    })
    .catch(err=>console.log(err))
    