const mongoose = require("mongoose");

const connectdb=()=>{
   
// mongoose
//   .connect("mongodb://0.0.0.0:27017/restApi")
//   .then(() => console.log("Database is connected"))
//   .catch(err=>console.log(err));

  try {
    mongoose.connect(process.env.mongooURL)
    console.log("Database is connected")
  } catch (error) {
    console.log(error)
  }
}
module.exports=connectdb