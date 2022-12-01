const express=require ("express");
const { addproduct, getAllproduct, getProductById, updateProduct, deleteProduct } = require("../controllers/productController");


const router = express.Router();
/**
 * @Params POST /product/addprod
 * @description add new product
 * @acces public 
 */
router.post('/addprod',addproduct)
/**
 * @Params Get /product
 * @description get Allproduct
 * @acces public
 */
router.get('/', getAllproduct)
/**
 * @Params Get /product/:idprod
 * @description get one product by id
 * @acces public
 */
 router.get('/:idprod',getProductById)


 /**
 * @Params Put /product/:idprod
 * @description Update one product
 * @acces public
 */
  router.put('/:idprod',updateProduct)

  /**
 * @Params Delete /product/:idprod
 * @description Delete one product
 * @acces public
 */
   router.delete('/:idprod',deleteProduct)








module.exports=router;
