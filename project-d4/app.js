const express = require("express");
const User = require("./models/user");
const mongoose = require("mongoose");
const Product = require("./models/product");
const app = express();
const PORT = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/product").then(() => {
  console.log("db connected");
});

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/product", (req, res) => {
  res.render("products");
});

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.post("/product/new", async (req, res) => {
  const { productName, price, description, imageUrl } = req.body;
  const newProduct = await Product.create({
    productName,
    price,
    description,
    imageUrl,
  });
  res.redirect("/product");
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
