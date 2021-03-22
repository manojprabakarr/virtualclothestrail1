const mongoose = require('mongoose');


 const connectdb= async()=> {

    const connection= await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    console.log(`mongodb connected  sucessfully${connection.connection.host}`);
 }

 module.exports= connectdb;