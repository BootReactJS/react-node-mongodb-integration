const  { Router }  = require("express");
const { getAllProducts } = require("../controllers/productsController.js")
const verifyToken = require("../middleware/tokenVerification.js")


const routeObj = Router();

// http://localhost:4936/api/product/allproducts

routeObj.get("/allproducts", verifyToken, getAllProducts);
// http://localhost:4936/api/products/allproducts

module.exports = routeObj;