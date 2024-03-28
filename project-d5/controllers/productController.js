const Product = require("../models/product");

const getProducts = async (req, res) => {
  const allProduct = await Product.find();
  res.render("products", { allProduct });
};

const showProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("showProduct", { product });
};

const getAddProduct = (req, res) => {
  res.render("addProduct");
};

const addProduct = async (req, res) => {
  const { productName, price, description, imageUrl } = req.body;
  const newProduct = await Product.create({
    productName,
    price,
    description,
    imageUrl,
  });
  newProduct.save();
  res.redirect("/product");
};

module.exports = {getProducts,showProduct,getAddProduct,addProduct}