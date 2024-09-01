    const mongoose=require("mongoose");

    mongoose.connect('mongodb+srv://abhi31452:Abhi31452@cluster0.vdetb6v.mongodb.net/Neosoft')
        // mongoose.connect("mongodb+srv://abhi31452:Z7JJX7MSz6ZfOnOQ@cluster0.vdetb6v.mongodb.net/Neosoft?retryWrites=true&w=majority&appName=Cluster0")
    .then((success)=>{console.log("connected......")
        require("../mongodbModel/employee"); // what schema and models we are using
    })
    .catch(err=>console.log(err))
//     const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://abhi31452:Abhi31452@cluster0.vdetb6v.mongodb.net/';

// // 'mongodb+srv://user2000:Abhi31452@cluster0.vdetb6v.mongodb.net/Neosoft?retryWrites=true&w=majority&appName=Cluster0';

// async function run() {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB successfully');
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);
