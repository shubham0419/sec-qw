const express = require("express");
const User = require("./models/user");
const mongoose = require('mongoose')
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/user').then(() => {
    console.log('db connected');
})

app.set("view engine", 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render('pr')
});

app.listen(PORT, () => console.log("Server running on port " + PORT));