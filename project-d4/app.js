const express = require("express");
const app = express();
const User = require("./models/user");
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const PORT = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/product").then(() => {
  console.log("db connected");
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/product", async (req, res) => {
  const allProduct = await Product.find();
  res.render("products", { allProduct });
});

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.get("/product/show/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("showProduct", { product });
});

app.post("/product/new", async (req, res) => {
  const { productName, price, description, imageUrl } = req.body;
  const newProduct = await Product.create({
    productName,
    price,
    description,
    imageUrl,
  });
  newProduct.save();
  res.redirect("/product");
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
