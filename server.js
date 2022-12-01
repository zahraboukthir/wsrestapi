const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT || 7000;
const connectdb = require("./config/conectDB");
app.use(express.json())
connectdb();
// const {addproduct,getAllproduct,getProductById,updateProduct}=require("./controllers/productController")
// getProductById('637b5c314dabb8932d927c23')
//  getAllproduct()
// addproduct()
// updateProduct('637b5c314dabb8932d927c23','ip')
app.use('/product',require("./routes/productRoutes"))
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`Server is runing on port ${port}`)
);

