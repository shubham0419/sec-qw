const express = require("express");
const router = express.Router();

const Product = require("../models/product");
const {getProducts, getAddProduct, showProduct, addProduct} = require("../controllers/productController");


router.get("/",getProducts);

router.get("/show/:id",showProduct);

router.get("/new",getAddProduct );

router.post("/new",addProduct );

module.exports = router;