const express = require("express");
const app = express();
const User = require("./models/user");
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const PORT = 5000;
const productRoutes = require("./routes/productRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/product").then(() => {
  console.log("db connected");
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/product",productRoutes);

// app.use("/api/v2/product",productRoutes);


app.listen(PORT, () => console.log("Server running on port " + PORT));
